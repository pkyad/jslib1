module.exports = {
	preset: 'ts-jest',
	verbose: true,
	testEnvironment: 'node',
	collectCoverageFrom: ['<rootDir>/src/**/*.{ts,js}'],
	coveragePathIgnorePatterns: [],
	modulePaths: ['<rootDir>/src'],
	moduleNameMapper: {
		'@src/(.*)': '<rootDir>/src/$1'
	},
	modulePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
	testMatch: [
		'<rootDir>/src/**/__tests__/**/*.[jt]s',
		'<rootDir>/src/**/?(*.)+(spec|test).[jt]s'
	]
	// coverageThreshold: {
	// 	global: {
	// 		branches: 38,
	// 		functions: 63,
	// 		lines: 70,
	// 		statements: 70
	// 	}
	// }
}
