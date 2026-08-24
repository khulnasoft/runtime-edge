import type { Config } from '@jest/types'
import path from 'path'

export default (rootDir: string): Config.InitialOptions => {
  const collectCoverage = process.env.COVERAGE === '1'
  return {
    rootDir,
    setupFilesAfterEnv: [path.join(__dirname, 'jest.setup.js')],
    transform: {
      '^.+\\.tsx?$': [
        'ts-jest',
        {
          'diagnostics': true,
          'isolatedModules': true,
        },
      ],
    },
    preset: 'ts-jest/presets/default',
    testEnvironment: 'node',
    watchPlugins: [
      'jest-watch-typeahead/filename',
      'jest-watch-typeahead/testname',
    ],
    collectCoverage,
    coverageProvider: 'v8',
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov', 'json-summary'],
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  }
}
