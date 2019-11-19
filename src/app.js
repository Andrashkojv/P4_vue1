const express = require("express");
const vue = require("vue");
const vueServerRenderer = require("vue-server-renderer");
const server = express();

server.get('*', (req, res) => {
	const app = new vue({
		data: {
			url: req.url
		},
		template: `<div>ви відкрили: {{ url }}</div>`
	});
	const renderer = vueServerRenderer.createRenderer({
		template: `<!DOCTYPE html>
		                <html lang="en">
		                  <head><title>Vue</title></head>
		                  <body>
		                    <!--vue-ssr-outlet-->
		                  </body>
		                </html>`
	});
	renderer.renderToString(app, (err, html) => {
		if (err) {
			res.status(500).send('Internal server error')
			return
		}
		res.send(html);
	});

});
server.listen(3000);
