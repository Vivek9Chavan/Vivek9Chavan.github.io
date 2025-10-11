---
layout: default
title: Blog
permalink: /blog/
---

# 📝 Blog

Welcome to my blog. I post reflections on AI, robotics, and the society here. A little  bit of research, a little bit of armchair philosophy.

<ul>
  {% for post in site.posts %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <br />
    <small>{{ post.date | date: "%B %d, %Y" }}</small>
  </li>
  {% endfor %}
</ul>
