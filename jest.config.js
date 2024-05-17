const { getJestProjects } = require('@nrwl/jest');

module.exports = {
  projects: [
    ...getJestProjects(),
    '<rootDir>/apps/store-api/core-client',
    '<rootDir>/apps/store-api/core-api',
    '<rootDir>/apps/store-api/core',
    '<rootDir>/apps/store-api/core-cli',
    '<rootDir>/apps/store-api/core-worker',
    '<rootDir>/apps/store-api/generate',
    '<rootDir>/apps/store-api/api',
    '<rootDir>/libs/shared/assets',
    '<rootDir>/apps/store-api/interface',
  ],
};
