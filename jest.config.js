const { Config } = require('jest')
const nextJest = require('next/jest.js')

const createJestConfig = nextJest({
    dir: './',
})

const config = {
    roots: [
        "./__test__/core",
    ],
    coverageProvider: 'v8',
}
module.exports = createJestConfig(config)
