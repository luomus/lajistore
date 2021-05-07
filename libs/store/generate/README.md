# store-generate

This library has the generators for different specs.
Currently, it is used for:
* [JSON Schema](./src/lib/generate/generate-json-schema.service.ts)
* [Elasticsearch index mapping](./src/lib/generate/generate-es-index.service.ts)
* [Json-LD context](./src/lib/generate/generate-json-ld-context.service.ts)
* [Typescript interfaces](./src/lib/generate/generate-interface.service.ts)
* [Open API](./src/lib/generate/generate-swagger.service.ts)
* [GraphQL schema](./src/lib/generate/generate-graphql.service.ts)

Only json-schema generator is using FinBIF api to build the structure.
Other generators are using json-schema spec to build their structure.

## Running unit tests

Run `nx test store-generate` to execute the unit tests via [Jest](https://jestjs.io).
