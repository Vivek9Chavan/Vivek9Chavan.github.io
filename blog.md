---
layout: default
title: Blog
permalink: /blog/
---
<header class="page-heading"><p class="eyebrow">Field notes & perspectives</p><h1>Blog<span class="name-dot">.</span></h1><p>Reflections on research, conferences, and the wider questions around AI.</p></header>
<div class="essay-list">{% assign visible_posts = site.posts | where_exp: "post", "post.hide_from_index != true" %}{% for post in visible_posts %}<article><p class="metadata">{{ post.date | date: '%d %B %Y' }}</p><div><h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2><a class="text-link" href="{{ post.url | relative_url }}">Read the essay ↗</a></div></article>{% endfor %}</div>
