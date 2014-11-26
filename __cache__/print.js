module.exports = function anonymous($_data_) {
var $_output_ = '';var __$utils = this,$helper = this,__$include = __$utils.include;
with($_data_ || {}) {
var $_output_ = '';$_output_ += '<!doctype html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8">\n\t<title>print</title>\n</head>\n<body>\n\t';
 var data = {hello: 'world'}; 
$_output_ += '\n</body>\n</html>';
}
return new String($_output_);

}