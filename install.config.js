const { Config } = require('jest')
const nextJest = require('next/jest.js')

const createJestConfig = nextJest({
    dir: './',
})

const config = {
    roots: [
        "./__test__/install",
    ],
    bail: 1,
    coverageProvider: 'v8',
    globalSetup: "<rootDir>/node_modules/@databases/pg-test/jest/globalSetup",
    globalTeardown: "<rootDir>/node_modules/@databases/pg-test/jest/globalTeardown",
}

module.exports = createJestConfig(config)
