import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './src',
});

const config: Config = {
  coverageProvider: 'v8',
  moduleNameMapper: {
    '^@/components': '<rootDir>/src/components/',
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/constants': '<rootDir>/src/constants/',
    '^@/constants/(.*)$': '<rootDir>/src/constants/$1',
    "^@/contexts": '<rootDir>/src/contexts/',
    "^@/contexts/(.*)$": '<rootDir>/src/contexts/$1',
    "^@/data": '<rootDir>/src/data/',
    "^@/data/(.*)$": '<rootDir>/src/data/$1',
    "^@/images": '<rootDir>/src/images/',
    "^@/images/(.*)$": '<rootDir>/src/images/$1',
    "^@/styles": '<rootDir>/src/styles/',
    "^@/styles/(.*)$": '<rootDir>/src/styles/$1',
    "^@/types": '<rootDir>/src/types/',
    "^@/types/(.*)$": '<rootDir>/src/types/$1',
    "^@/utils": '<rootDir>/src/utils/',
    "^@/utils/(.*)$": '<rootDir>/src/utils/$1',
    "^@/viewModels": '<rootDir>/src/viewModels/',
    "^@/viewModels/(.*)$": '<rootDir>/src/viewModels/$1',
  },
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '\\.spec\\.ts$'],
};

export default createJestConfig(config);
