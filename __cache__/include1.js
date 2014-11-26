module.exports = function anonymous($_data_) {
var $_output_ = '';var __$utils = this,$helper = this,__$include = __$utils.include,__$trim = __$utils.trim;
var name;
with($_data_ || {}) {
var $_output_ = '';$_output_ += '<div style="background: red"> this is from include1.html start </div>\n';
var a = {name: 'from aa'} 
$_output_ += '\n';
$_output_ += __$include('__cache__/include1-1.html', a);
$_output_ += '\n----';
name = __$trim(name);
$_output_ += name;
$_output_ += '---- <br>\n<div style="background: red"> this is from include1.html end</div>\n';
}
return new String($_output_);

}