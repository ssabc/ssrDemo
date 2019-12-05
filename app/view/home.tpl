  
{% extends "./layout/layout.tpl" %}

{% block content %}
  <div class="news-view view v-transition">
    <div>用户id: <span>{{userInfo.id}}</span></div>
    <div>姓名: <span>{{userInfo.name}}</span></div>
    <div>性别: <span>{{userInfo.sex}}</span></div>
    <div>年龄: <span>{{userInfo.age}}岁</span></div>
  </div>
{% endblock %}