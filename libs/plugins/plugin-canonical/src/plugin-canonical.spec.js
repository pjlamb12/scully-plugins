const { setCanonicalLinkPlugin } = require('./plugin-canonical.js');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const STARTING_HTML = `<!DOCTYPE html> <html lang="en"> <head> <link rel="canonical" href="https://example.com" /> <title>Test HTML File</title> </head> <body> </body> </html>`;
const STARTING_HTML_NO_LINK = `<!DOCTYPE html> <html lang="en"> <head> <title>Test HTML File</title> </head> <body> </body> </html>`;

test('it should replace the value of the href for the canonical link if the route object has a value', async (done) => {
	const newHtml = await setCanonicalLinkPlugin(STARTING_HTML, {
		route: 'test-route',
		canonical: 'https://example-changed.com',
	});
	const newHtmlNoLink = await setCanonicalLinkPlugin(STARTING_HTML_NO_LINK, {
		route: 'test-route',
		canonical: 'https://example-added.com',
	});

	const dom = new JSDOM(newHtml);
	const { window } = dom;
	const { document } = window;
	const linkTag = document.querySelector('link[rel="canonical"]');

	expect(linkTag.getAttribute('href')).toBe('https://example-changed.com');

	const dom2 = new JSDOM(newHtmlNoLink);
	const { window: window2 } = dom2;
	const { document: document2 } = window2;
	const linkTag2 = document2.querySelector('link[rel="canonical"]');

	expect(linkTag2.getAttribute('href')).toBe('https://example-added.com');

	done();
});

test('it should replace the value of the href for the canonical link if the route.data object has a value', async (done) => {
	const newHtml = await setCanonicalLinkPlugin(STARTING_HTML, {
		route: 'test-route',
		data: { canonical_url: 'https://example-changed.com' },
	});
	const newHtmlNoLink = await setCanonicalLinkPlugin(STARTING_HTML_NO_LINK, {
		route: 'test-route',
		data: { canonical_url: 'https://example-added.com' },
	});

	const dom = new JSDOM(newHtml);
	const { window } = dom;
	const { document } = window;
	const linkTag = document.querySelector('link[rel="canonical"]');

	expect(linkTag.getAttribute('href')).toBe('https://example-changed.com');

	const dom2 = new JSDOM(newHtmlNoLink);
	const { window: window2 } = dom2;
	const { document: document2 } = window2;
	const linkTag2 = document2.querySelector('link[rel="canonical"]');

	expect(linkTag2.getAttribute('href')).toBe('https://example-added.com');

	done();
});

test("it should not replace the value of the href for the canonical link if the route doesn't provide a replacement", async (done) => {
	const newHtml = await setCanonicalLinkPlugin(STARTING_HTML, { route: 'test-route' });
	const dom = new JSDOM(newHtml);
	const { window } = dom;
	const { document } = window;
	const linkTag = document.querySelector('link[rel="canonical"]');

	expect(linkTag.getAttribute('href')).toBe('https://example.com');
	done();
});
