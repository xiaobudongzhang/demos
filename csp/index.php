<?php
header("Content-Security-Policy:script-src 'self' ;report-uri /test.php");

echo <<<HTML
<!DOCTYPE html>
<html>
<head>
	<title>vue src demo</title>
<!--	<meta http-equiv="Content-Security-Policy" content="script-src 'self' 'unsafe-eval';">
	<meta http-equiv="Content-Security-Policy-Report-Only" content="report-uri /test.php">-->
</head>
<body>

<div id="app">{{msg}}</div>
<div>
  <h2>我是子组件的标题</h2>
  <slot>
    只有在没有要分发的内容时才会显示。
  </slot>
</div>
<script src="vue.js" type="text/javascript"></script>
<!-- <script src="vue-router.js" type="text/javascript"></script> -->
<script src="case.js" type="text/javascript"></script>
</body>
</html>

HTML;
