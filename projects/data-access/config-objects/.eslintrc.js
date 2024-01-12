module.exports = {
	extends: ['../../../.eslintrc.base.json'],
	ignorePatterns: ['!**/*'],
	overrides: [
		{
			files: ['*.ts'],
			extends: [
				'plugin:@nx/angular',
				'plugin:@angular-eslint/template/process-inline-templates',
			],
			rules: {
				'@angular-eslint/directive-selector': [
					'error',
					{
						type: 'attribute',
						prefix: 'dataAccessConfigObjects',
						style: 'camelCase',
					},
				],
				'@angular-eslint/component-selector': [
					'error',
					{
						type: 'element',
						prefix: 'data-access-config-objects',
						style: 'kebab-case',
					},
				],
			},
			parserOptions: {
				project: ['./tsconfig.lib.json', './tsconfig.spec.json'],
				tsconfigRootDir: __dirname,
			},
		},
		{
			files: ['*.html'],
			extends: ['plugin:@nx/angular-template'],
			rules: {},
		},
	],
};
