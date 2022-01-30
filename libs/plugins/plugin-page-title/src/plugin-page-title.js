const { log, logWarn, yellow } = require('@scullyio/scully');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const changeTitlePlugin = async (html, route) => {
	try {
		log(`Changing page title for ${yellow(route.route)}.`);
		const dom = new JSDOM(html);
		const routeTitle =
			route.title ||
			(route.data && route.data.title) ||
			route.pageTitle ||
			(route.data && route.data.pageTitle) ||
			route.page_title ||
			(route.data && route.data.page_title);
		if (routeTitle) {
			log(`Page title attribute found for ${yellow(route.route)}.`);
			const { window } = dom;
			const { document } = window;
			const { head } = document;
			// Solution
			const titleTag = document.querySelectorAll('title')[0];

			if (titleTag) {
				const titleParent = titleTag.parentNode;
				titleParent.removeChild(titleTag);
			}

			var newTitle = document.createElement('title');
			head.appendChild(newTitle);
			newTitle.innerHTML = routeTitle;
			log(`Done replacing title for ${yellow(route.route)}.`);
			return dom.serialize();
		} else {
			log(`No title to replace for ${yellow(route.route)}`);
		}
	} catch (e) {
		logWarn(e);
		logWarn(`Error in changeTitlePlugin, didn't parse for route "${yellow(route.route)}"`);
	}
	// in case of failure return unchanged HTML to keep flow going
	return html;
};

module.exports = {
	changeTitlePlugin,
};
