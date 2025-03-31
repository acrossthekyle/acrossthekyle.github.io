import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './src',
});

const config: Config = {
  coverageProvider: 'v8',
  moduleNameMapper: {
    "^@/constants/(.*)$": "<rootDir>/src/constants/$1",
  },
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '\\.spec\\.ts$'],
};

export default createJestConfig(config);
