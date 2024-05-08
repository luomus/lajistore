FROM node:16 as builder
ENV NODE_ENV build

WORKDIR /app
RUN chown -Rh node:node /app
USER node

# Copy the things that are needed for installing corrent node_modules
COPY --chown=node:node ./package*.json ./

# Remove postinstall from package json (we need other packages to run postinstall but not this one)
RUN npm ci --ignore-scripts \
 && npm cache clean --force

# Copy to image only the files that are really needed
COPY --chown=node:node ./tsconfig.base.json ./nx.json ./angular.json ./
COPY --chown=node:node ./apps ./apps
COPY --chown=node:node ./libs ./libs

# Build all versions of store so that they can be cherry-picked in other targets as needed
RUN npm run nx -- build --prod store-api \
 && npm run nx -- build --prod store-cli \
 && npm run nx -- build --prod store-worker


FROM node:16 as dev

EXPOSE 3000

ENV NODE_ENV development
ENV ORACLE_CLIENT_FILENAME oracle-instantclient-basiclite-21.1.0.0.0-1.x86_64.rpm

# Install Oracle instanclient so that oracle db can be accessed from node
# to find versions available you can go to https://yum.oracle.com/repo/OracleLinux/OL7/oracle/instantclient21/x86_64/
RUN apt update \
 && apt install -y --no-install-recommends alien libaio1 curl libaio1 libaio-dev libssl-dev musl-dev \
 && wget https://yum.oracle.com/repo/OracleLinux/OL7/oracle/instantclient21/x86_64/getPackage/${ORACLE_CLIENT_FILENAME} \
 && alien -i --scripts ${ORACLE_CLIENT_FILENAME} \
 && rm -f ${ORACLE_CLIENT_FILENAME} \
 && apt -y autoremove \
 && apt -y clean \
 && rm -rf /var/lib/apt/lists/* \
 && ldconfig

SHELL ["/bin/bash", "-c"]
WORKDIR /app
RUN chown -Rh node:node /app
USER node

# To run this you need to mount ./ (with corrent node_modules included) to this image
CMD [ "npm", "run", "nx", "--", "serve", "store-api" ]


FROM dev as api
ENV NODE_ENV production

COPY --chown=node:node --from=builder /app/dist/apps/store-api /app/package*.json ./

# Install only packages that are needed for prodcution
RUN npm ci --only=production \
 && npm cache clean --force

CMD [ "node", "main.js" ]


FROM api as cli
ENV NODE_ENV production

COPY --chown=node:node --from=builder /app/dist/apps/store-cli ./

# This will keep the pod running so that you can connect terminal to it when ever
CMD [ "tail", "-f", "/dev/null"]


FROM cli as worker
ENV NODE_ENV production

# Worker need cli runtime also since that is used to monitor the state of the worker process
COPY --chown=node:node --from=builder /app/dist/apps/store-worker ./
COPY --chown=node:node --from=builder /app/dist/apps/store-cli/main.js ./cli.js

CMD [ "node", "main.js" ]
