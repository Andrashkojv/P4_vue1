import express from "express";
import { createRenderer } from "vue-server-renderer";
import Hello from "./hello";

const server = express();

server.get('*', (req, res) => {
	const root = Hello({ message: "Текст повідомлення"});
	const renderer = createRenderer({
		template:  require('fs').readFileSync('index.template.html', 'utf-8')
	});
	renderer.renderToString(root, (err, html) => {
		if (err) {
			console.log(err);
			res.status(500).send('Internal server error');
		} else {
			res.send(html);
		}
	});

});
server.listen(3000);
console.log("Server run on http://localhost:3000/")
