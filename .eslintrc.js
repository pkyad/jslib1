module.exports = {
	root: true,
	extends: ['eslint:recommended', 'plugin:prettier/recommended'],
	env: {
		browser: true,
		node: true,
		jest: true,
		es6: true
	},
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module'
	},
	overrides: [
		{
			files: ['*.ts'],
			parser: '@typescript-eslint/parser',
			extends: ['plugin:@typescript-eslint/recommended'],
			rules: {
				'@typescript-eslint/ban-ts-comment': 'warn',
				'@typescript-eslint/explicit-module-boundary-types': 'off'
			}
		},
		{
			files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
			extends: [],
			rules: {}
		}
	],
	rules: {
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/ban-ts-comment': 'off'
	}
}
