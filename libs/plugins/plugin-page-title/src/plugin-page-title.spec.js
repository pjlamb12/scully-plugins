const { changeTitlePlugin } = require('./plugin-page-title.js');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const STARTING_HTML = `<!DOCTYPE html> <html lang="en"> <head> <style>html { background: #dedede; }</style> <style>html { color: #444; }</style> <style>* { font-family: 'Arial'; }</style> <title>Test HTML File</title> </head> <body> </body> </html>`;

test('it should replace the title tag if the route object has one', async (done) => {
	const newHtml = await changeTitlePlugin(STARTING_HTML, { route: 'test-route', title: 'New Title' });
	const dom = new JSDOM(newHtml);
	const { window } = dom;
	const { document } = window;
	const titleTag = document.querySelectorAll('title')[0];

	expect(titleTag.innerHTML).toBe('New Title');
	done();
});

test('it should replace the title tag if the route.data object has one', async (done) => {
	const newHtml = await changeTitlePlugin(STARTING_HTML, { route: 'test-route', data: { title: 'New Title' } });
	const dom = new JSDOM(newHtml);
	const { window } = dom;
	const { document } = window;
	const titleTag = document.querySelectorAll('title')[0];

	expect(titleTag.innerHTML).toBe('New Title');
	done();
});

test("it should not replace the title tag if the route data doesn't have one", async (done) => {
	const newHtml = await changeTitlePlugin(STARTING_HTML, { route: 'test-route' });
	const dom = new JSDOM(newHtml);
	const { window } = dom;
	const { document } = window;
	const titleTag = document.querySelectorAll('title')[0];

	expect(titleTag.innerHTML).toBe('Test HTML File');
	done();
});
