### A node template, and the best choice.

## * **Feature**
* *block、extends、include、literal* command supported, with syntax-sugar and smarty engine features 

* pipe filters suport

* rumtime stably, ensure your empty varible run stably

## * **usage**

### **basic** syntax with pipe filters
* *basic.html*
```
<%
	var a = 12;
	var de = null;
	var list = [1,2,3];
%>
<% if(a) { %>
	<div>${name|trim|} </div>
	<div>${name|trim|escape} </div>
	<div>inline variable: ${a} </div>
	<div>unknow variable: ${wo_wo} </div>
	<div>unknow variable: ${wo_wo|ensure} </div>
	<div>unknow variable: ${de|ensure|ensure|count} </div>
<% } %>
<%if (1) {%>
	<div>1</div>
<%}%>
<%for(var i=0; i <list.length; i++) {%>
	<div>${list[i]}</div>
<%}%>
```
* *test.js*
```
var template = require('../../template');
var fs = require('fs');
var data= {}
var rs = template.renderFile('basic.html', data);
console.log(rs)
```
* *output*
```
    <div>undefined </div>
	<div>undefined </div>
	<div>inline variable: 12 </div>
	<div>unknow variable: undefined </div>
	<div>unknow variable:  </div>
	<div>unknow variable: 0 </div>
	<div>1</div>
	<div>1</div>
	<div>2</div>
	<div>3</div>
```

### **include** command
*  *include.html*
```
<body>
	<%var data = {name: 'alex', age: 22} %>
	<%include name='sub'%>
</body>
```
*  *sub.html*
```
<div class="include">
	<div class="sub">
		sub content woow
	</div>
</div>
```
* *output*
```
<body>
	<div class="include">
	<div class="sub">
		sub content woow
	</div>
    </div>
</body>
```

### **extends** & **block** command, you can use `<!-- some comments -->` 

* *parent.html*
```
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>extend</title>
	<%block name='css_head_base' %>
		<!-- parent head css -->
		<link rel="stylesheet" href="/st/css/index.css">
		<!-- parent head css -->
	<%/block%>
	<%block name="js_head_base"%>
	<script>
		console.log('parent head js');
	</script>
	<%/block%>
</head>
<body>
	<header id="fields">
		<div class="include-label label">include</div>
		<div class="block-label label">block</div>
		<div class="expression-label label">expression</div>
		<div class="literal-label label">literal</div>
	</header>
	<div id="main">
	<div class="expression">${o['name']}</div>
	<!-- declare block command -->
	<div class="block">
	<%block name="hello"%>
		<%include	'extends_block/sub.html' /%>
		<%include 'sub/sub-data' 'data' /%>
		<%
			var a = 12;
			var a = $helper.hello('a');
		%>
		<div class="expression">
			${a}
		</div>
		<%if (name) { %>
			<div class="expression">${a}</div>
		<%}%>
		<div class="expression">
		${age|trim}
		</div>
	<%/block%>
	</div>
	<%block name="js_footer_base"%>
	<script>
		console.log('parent footer js');
	</script>
	<%/block%>
</body>
</html>
```
* *child.html*
```
<%extends 'extends_block/parent.html' %>
<%block name='js_head_base' append%>
	<!-- child head js -->
	<script>
		console.log('child head js append');
	</script>
	<!-- child head js -->
<%/block%>
</div>

<%block name="hello" append%>
	this is main child
	<%include name="extends_block/sub" /%>
	<%var data = {appName: 'T 语言' } %>
<%/block%>


<%block name='js_footer_base' prepend%>
	<script>
		console.log('child footer js prepend');
	</script>
<%/block%>
```
* *output*
Ten thousand words omitted here(I bet that is right)

###  **helper** methods extend
* *demo.html*
```
    <div class="hello">
	<%
		var a = 'hello world' ;
		var b = $helper.sayHello(a);
	%>
	${b}
	${a|sayHello}
</div>
```
* *test.js*
```
var template = require('../../template');
var fs = require('fs');

template.config({
	cacheDir: '../../__cache__',
	src: '../../demo'
});

template.helper('hello', function(str) {
	return 'hello, ' + str;
});

var rs = template.renderFile('demo.html', {});
console.log(rs);
```






