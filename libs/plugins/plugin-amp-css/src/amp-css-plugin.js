const { log, logWarn, yellow } = require('@scullyio/scully');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const combineStylesAmpPlugin = async (html, route) => {
	try {
		log(`Combining Styles for ${yellow(route.route)}.`);
		const dom = new JSDOM(html);
		const { window } = dom;
		const { document } = window;
		const { head } = document;
		// Solution
		const styleTags = document.querySelectorAll('style');
		log(`${yellow(styleTags.length)} Style tag(s) found for ${yellow(route.route)}.`);
		var totalStyles = ``;
		Array.prototype.forEach.call(styleTags, (style) => {
			const parent = style.parentNode;
			parent.removeChild(style);
			totalStyles += style.innerHTML;
		});
		var newStyle = document.createElement('style');
		head.appendChild(newStyle);
		newStyle.innerHTML = totalStyles;
		log(`Done combining Styles for ${yellow(route.route)}.`);
		return dom.serialize();
	} catch (e) {
		logWarn(e);
		logWarn(`Error in combineStylesPlugin, didn't parse for route "${yellow(route.route)}"`);
	}
	// in case of failure return unchanged HTML to keep flow going
	return html;
};

module.exports = {
	combineStylesAmpPlugin,
};
