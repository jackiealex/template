module.exports = function anonymous($_data_) {
var $_output_ = '';var __$utils = this,$helper = this,__$include = __$utils.include,__$trim = __$utils.trim;
var a,age;
with($_data_ || {}) {
var $_output_ = '';$_output_ += '<!doctype html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8">\n\t<title>extend</title>\n\t\n\t\t<!-- parent head css -->\n\t\t<link rel="stylesheet" href="/st/css/index.css">\n\t\t<!-- parent head css -->\n\t\n\t\n\t<script>\n\t\tconsole.log(\'parent head js\');\n\t</script>\n\t\n\t\n\t<script>\n\t\tconsole.log(\'child head js append\');\n\t</script>\n\t\n\n</head>\n<body>\n\t<header id="fields">\n\t\t<div class="include-label label">include</div>\n\t\t<div class="block-label label">block</div>\n\t\t<div class="expression-label label">expression</div>\n\t\t<div class="literal-label label">literal</div>\n\t</header>\n\t<div id="main">\n\t<div class="expression">';
$_output_ += o['name'];
$_output_ += '</div>\n\t<!-- declare block command -->\n\t<div class="block">\n\t\n\t\t';
$_output_ += __$include('__cache__/extends_block/sub.html', undefined);
$_output_ += '\n\t\t';
$_output_ += __$include('__cache__/sub/sub-data.html', data);
$_output_ += '\n\t\t';

			var a = 12;
			var a = $helper.hello('a');
		
$_output_ += '\n\t\t<div class="expression">\n\t\t\t';
$_output_ += a;
$_output_ += '\n\t\t</div>\n\t\t';
if (name) { 
$_output_ += '\n\t\t\t<div class="expression">';
$_output_ += a;
$_output_ += '</div>\n\t\t';
}
$_output_ += '\n\t\t<div class="expression">\n\t\t';
age = __$trim(age);
$_output_ += age;
$_output_ += '\n\t\t</div>\n\t\n\tthis is main child\n\t';
$_output_ += __$include('__cache__/extends_block/sub.html', undefined);
$_output_ += '\n\t';
var data = {appName: 'T 语言' } 
$_output_ += '\n\n\t</div>\n\t\n\t<script>\n\t\tconsole.log(\'child footer js prepend\');\n\t</script>\n\n\t<script>\n\t\tconsole.log(\'parent footer js\');\n\t</script>\n\t\n</body>\n</html>\n\n';
}
return new String($_output_);

}