<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
    <link rel="stylesheet" href="/public/css/news.css" />
    <link rel="icon" href="/public/favicon.png" type="image/x-icon">
    <title>{% block title %}my - mac - sql- test{% endblock %}</title>
  </head>
  <body>
    <div id="wrapper">
      <div id="header">
        <h1>&nbsp;<a href="/news" style="color: #fff;font-weight: 300;">数据库test-表users</a></h1>
        <span class="source">
         <a href="https://www.baidu.com/" target="_blank"> 百度 </a>
        </span>
      </div>
      {% block content %}{% endblock %}
    </div>
  </body>
</html>