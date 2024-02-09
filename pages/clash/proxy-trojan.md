---
title: Proxy Trojan
keywords: proxy trojan
sidebar: clash
toc: false
permalink: proxy-trojan.html
folder: clash
comments: true
tags: [clash]
---

## Trojan GFW

<pre id="myPreTag">
- name: "trojan"
  type: trojan
  server: id-trojan.com
  port: 443
  password: xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx
  udp: true
  sni: bug.com
  skip-cert-verify: true
</pre>

## Trojan WS

<pre id="myPreTag">
- name: "trojan"
  type: trojan
  server: bug.com
  port: 443
  password: xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx
  udp: true
  sni: id-trojan.com
  skip-cert-verify: true
  network: ws
  ws-opts:
    path: /pathakun
    headers:
      Host: id-trojan.com
</pre>