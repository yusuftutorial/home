---
title: Search
layout: search
sidebar: home
keywords: search
permalink: search.html
---

<div id="search-demo-container">
<input type="text" id="search-input" placeholder="search...">
<ul id="results-container"></ul>
</div>

{% assign pages = site.html_pages | where_exp: "page", "page.search != 'exclude'"  %}
[
{% for page in pages %}
{
"title": "{{ page.title | escape }}",
"tags": "{{ page.tags }}",
"keywords": "{{page.keywords}}",
"url": "{{ page.url | remove: "/"}}",
"summary": "{{page.summary | strip }}"
}
{% unless forloop.last and site.posts.size < 1 %},{% endunless %}
{% endfor %}

{% for post in site.posts %}

{
"title": "{{ post.title | escape }}",
"tags": "{{ post.tags }}",
"keywords": "{{post.keywords}}",
"url": "{{ post.url | remove: "/" }}",
"summary": "{{post.summary | strip }}"
}
{% unless forloop.last %},{% endunless %}
{% endfor %}

]
