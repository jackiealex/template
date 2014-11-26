module.exports = function anonymous($_data_) {
var $_output_ = '';var __$utils = this,$helper = this,__$include = __$utils.include;
var appName,i;
with($_data_ || {}) {
var $_output_ = '';$_output_ += '<div class="include">\n\t';
$_output_ += appName;
$_output_ += ' is the best app 1221\n\t';
for (var i =0; i< 10; i++) {
$_output_ += '\n\t\t';
$_output_ += i;
$_output_ += '\n\t';
}
$_output_ += '\n</div>\n';
}
return new String($_output_);

}