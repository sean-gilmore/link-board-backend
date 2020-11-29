# Link Board Backend

## Environments

- Production
  - Master branch
- Development
  - Develop branch

## Pre-requisites

- nvm
- .env file with required config

## Env file

Ensure you have set up the required environment variables, as per the example
`.envrc` file included in the project root.

## Commands

Setup database:`yarn knex migrate:latest`

Setup test database: `yarn knex migrate:latest --env test`

Seed test database: `yarn knex seed:run --env test`

Running development: `yarn start`

Running production: `yarn prod-start`

Building production: `yarn build`

Running tests: `yarn test`

Running validation: `yarn validate`

## Tutorials I've followed

- https://medium.freecodecamp.org/how-to-enable-es6-and-beyond-syntax-with-node-and-express-68d3e11fe1ab
- https://medium.com/@sgroff04/configure-eslint-prettier-and-flow-in-vs-code-for-react-development-c9d95db07213 (configuring eslint + flow)
