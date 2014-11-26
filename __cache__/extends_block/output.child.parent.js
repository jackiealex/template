module.exports = function anonymous($_data_) {
var $_output_ = '';var __$utils = this,$helper = this,__$include = __$utils.include,__$trim = __$utils.trim;
var hello;
with($_data_ || {}) {
var $_output_ = '';$_output_ += '<!doctype html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8">\n\t<title>extend</title>\n\t\n\t\t<link rel="stylesheet" href="index.css">\n\t\n\t\n\t\t<script src=\'a.js\'></script>\n\t\t<script src=\'b.js\'></script>\n\t\t<script src="page.js"></script>\n\t\t<script>\n\t\t\talert(1);\n\t\t</script>\n\t\n</head>\n<body>\n\t\n\t<div id="main">\n\t\n\n\t\t#this is a expression\n\t\t';

			var a = 12;
		
$_output_ += '\n\t\t';
if (a) { 
$_output_ += '\n\t\t\t<div>dsfsdf</div>\n\t\t';
}
$_output_ += '\n\t\t#this is a include command\n\t\t#this is evaluate\n\t\t';
hello = __$trim(hello);
$_output_ += hello;
$_output_ += '\n\t\n\t</div>\n\t\n\t\t<script src=\'f.js\'></script>\n\t\t<script>\n\t\t\tconsole.log(\'hello\');\n\t\t</script>\n\t\n</body>\n</html>\n';
}
return new String($_output_);

}