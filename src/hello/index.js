import vue from "vue";

function Hello(context) {
	
    return new vue({
		data: {
			message: context.message
		},
		template:  require('fs').readFileSync('./src/hello/template.html', 'utf-8')
	});
};

export default Hello;