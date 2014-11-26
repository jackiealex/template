module.exports = function anonymous($_data_) {
var $_output_ = '';var __$utils = this,$helper = this,__$include = __$utils.include;
var name;
with($_data_ || {}) {
var $_output_ = '';$_output_ += '\n<div> this is from include1-1 ';
$_output_ += name;
$_output_ += '  waca</div>';
}
return new String($_output_);

}