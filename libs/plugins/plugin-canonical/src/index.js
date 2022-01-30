const { registerPlugin } = require('@scullyio/scully');
const { setCanonicalLinkPlugin } = require('./plugin-canonical');

const validator = async (config) => [];
registerPlugin('postProcessByHtml', 'setCanonicalLinkPlugin', setCanonicalLinkPlugin, validator);

module.exports = {
	setCanonicalLinkPlugin,
};
