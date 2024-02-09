---
title: Rule Online Shop
keywords: online shop
sidebar: clash
toc: false
permalink: rule-online-shop.html
folder: clash
comments: true
tags: [clash]
---

## Rule Provider

Taruh ke dalam file baru dengan nama `olshop.yaml` di dalam folder `rule_provider`.

<pre>payload:

  # > RULE BY SIMASTER
  - "+.shopee.co.id"
  - "+.shopeemobile.com"
  - "+.shopee.sg"
  - "+.lazada.co.id"
  - "+.bukalapak.com"
  - "+.blibli.com"
  - "+.tokopedia.com"
  - "+.amazon.com"
  - "+.alibaba.com"
  - "+.ebay.com"
  - "+.shopify.com"</pre>

## Config

Salin dan tempelkan ke dalam `config` anda.

<pre>rule-providers:
  Olshop:
    type: file
    behavior: classical
    path: "./rule_provider/olshop.yaml"</pre>

Kemudian salin kembali lalu tempelkan lagi di dalam `config`.

<pre>rules:
- RULE-SET,Olshop,[isi nama group olshop]</pre>

Sebagai contoh:

rules:
- RULE-SET,Olshop,OLSHOP

Jika sudah beres semua, silahkan untuk `save config` anda dan jalankan ulang `config` dengan menekan `switch config`

