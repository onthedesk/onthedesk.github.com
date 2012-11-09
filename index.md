---
layout: page
title: On the Desk 
tagline: —— 这一生与Desk的不解之缘
---
{% include JB/setup %}

前几天在组内的wiki上用markdown写了一些开发过程，感觉这么写东西的方式是非常舒服的。感谢Jhon Gruber的创造...  
  
    
#### 最新发布的文章

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>



