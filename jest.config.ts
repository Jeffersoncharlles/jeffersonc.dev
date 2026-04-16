import createJestConfig from 'next/jest.js'

const config = createJestConfig({
  dir: './',
})({
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  transform: {},
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@payload-config$': '<rootDir>/src/tests/mocks/payload-config.ts',
  },
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '/e2e/',
    '/src/components/ui/',
    '/src/lib/',
    '/src/generated/',
    '/src/tests/mocks/',
    'payload-types.ts',
    'node_modules/(?!(@payloadcms|payload|@drizzle-team)/)',
    '/src/core/infra/cms/collections/',
    'payload.config.ts',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.next/',
    '<rootDir>/e2e/',
  ],
})

export default config
