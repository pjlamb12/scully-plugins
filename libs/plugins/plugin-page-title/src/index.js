const { registerPlugin } = require('@scullyio/scully');
const { changeTitlePlugin } = require('./plugin-page-title');

const validator = async (config) => [];
registerPlugin('postProcessByHtml', 'changeTitlePlugin', changeTitlePlugin, validator);

module.exports = {
	changeTitlePlugin,
};
