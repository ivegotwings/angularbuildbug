// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
	config.set({
		basePath: '',
		captureTimeout: 300000,
		browserNoActivityTimeout: 60000,
		browserDisconnectTimeout: 10000,
		browserDisconnectTolerance: 5,
		frameworks: ['jasmine', '@angular-devkit/build-angular'],
		plugins: [
			require('karma-jasmine'),
			require('karma-chrome-launcher'),
			require('karma-coverage-istanbul-reporter'),
			require('karma-coverage'),
			require('@angular-devkit/build-angular/plugins/karma'),
		],
		client: {
			clearContext: false, // leave Jasmine Spec Runner output visible in browser
		},
		coverageIstanbulReporter: {
			dir: require('path').join(
				__dirname,
				__dirname
					.split('/')
					.splice(__dirname.split('/').indexOf('projects'))
					.reduce((acc, cur) => {
						acc = '../' + acc;
						return acc;
					}, '') + 'coverage/projects/data-access/config-objects/'
			),
			reports: ['json', 'text-summary'],
			fixWebpackSourcePaths: true,
			thresholds: {
				global: {
					statements: 0,
					lines: 0,
					//branches: 29,
					//functions: 50
				},
			},
		},
		reporters: ['coverage-istanbul'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		singleRun: false,
		browsers: ['ChromeHeadlessNoSandbox'],
		customLaunchers: {
			ChromeHeadlessNoSandbox: {
				base: 'ChromeHeadless',
				flags: ['--no-sandbox', '--disable-web-security'],
			},
		},
	});
};
