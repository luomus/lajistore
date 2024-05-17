# base image
FROM node:18

RUN apt-get update \
 && apt-get install -y alien libaio1 curl libaio1 libaio-dev libssl-dev musl-dev \
 && wget https://yum.oracle.com/repo/OracleLinux/OL7/oracle/instantclient/x86_64/getPackage/oracle-instantclient19.3-basiclite-19.3.0.0.0-1.x86_64.rpm \
 && alien -i --scripts oracle-instantclient*.rpm \
 && rm -f oracle-instantclient19.3*.rpm \
 && apt-get -y autoremove \
 && apt-get -y clean \
 && rm -rf /var/lib/apt/lists/* \
 && ln -sf /lib/x86_64-linux-musl/libc.so /usr/lib/libc.musl-x86_64.so.1

WORKDIR /app

COPY --chown=node:node ./decorate-angular-cli.js ./package*.json ./

# Install share deps
RUN npm ci \
 && npm cache clean --force

CMD ["npm", "start:store-api"]
