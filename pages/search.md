---
title: Search
layout: search
sidebar: home
keywords: search
permalink: search.html
---

<!--start search-->
<div id="search-demo-container">
    <input type="text" id="search-input" placeholder="{{site.data.strings.search_placeholder_text}}">
    <ul id="results-container"></ul>
</div>
<script src="{{ "js/jekyll-search.js"}}" type="text/javascript"></script>
<script type="text/javascript">
        SimpleJekyllSearch.init({
            searchInput: document.getElementById('search-input'),
            resultsContainer: document.getElementById('results-container'),
            dataSource: '{{ "search.json" }}',
            searchResultTemplate: '<ul><li><a href="{url}" title="{{page.title | escape }}">{title}</a></li><ul>',
noResultsText: '{{site.data.strings.search_no_results_text}}',
        limit: 10,
        fuzzy: true,
})
</script>
<!--end search-->