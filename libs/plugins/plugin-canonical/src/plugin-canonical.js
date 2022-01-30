const { log, logWarn, yellow } = require('@scullyio/scully');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const setCanonicalLinkPlugin = async (html, route) => {
	try {
		log(`Changing canonical link for ${yellow(route.route)}.`);
		const dom = new JSDOM(html);
		const canonical =
			route.canonical ||
			(route.data && route.data.canonical) ||
			route.canonicalUrl ||
			(route.data && route.data.canonicalUrl) ||
			route.canonical_url ||
			(route.data && route.data.canonical_url);
		if (canonical) {
			log(`Page title attribute found for ${yellow(route.route)}.`);
			const { window } = dom;
			const { document } = window;
			const { head } = document;
			// Solution
			const linkTag = document.querySelector('link[rel="canonical"]');

			if (linkTag) {
				linkTag.setAttribute('href', canonical);
			} else {
				const newLinkTag = document.createElement('link');
				newLinkTag.setAttribute('rel', 'canonical');
				newLinkTag.setAttribute('href', canonical);
				head.appendChild(newLinkTag);
			}

			log(`Done replacing canonical for ${yellow(route.route)}.`);
			return dom.serialize();
		} else {
			log(`No canonical link to replace for ${yellow(route.route)}`);
		}
	} catch (e) {
		logWarn(e);
		logWarn(`Error in setCanonicalLinkPlugin, didn't parse for route "${yellow(route.route)}"`);
	}
	// in case of failure return unchanged HTML to keep flow going
	return html;
};

module.exports = {
	setCanonicalLinkPlugin,
};
