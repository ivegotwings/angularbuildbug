const { join } = require('path');
const getBaseKarmaConfig = require('./karma-headless.conf');

module.exports = function (config) {
	const baseConfig = getBaseKarmaConfig(config);
	config.set({
		...baseConfig,
		singleRun: true,
		failOnEmptyTestSuite: false,
	});
};
