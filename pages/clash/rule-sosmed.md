---
title: Rule Sosmed
keywords: sosmed
sidebar: clash
toc: false
permalink: rule-sosmed.html
folder: clash
comments: 
tags: [clash]
---

## Rule Provider

Taruh ke dalam file baru dengan nama `sosmed.yaml` di dalam folder `rule_provider`.

<pre>payload:

  # > RULE BY SIMASTER
  - "+.fb.com"
  - "+.facebook.com"
  - "+.fbcdn.net"
  - "+.messenger.com"
  - "+.instagram.com"
  - "+.cdninstagram"
  - "+.twitter.com"
  - "+.twitpic.com"
  - "+.tiktok.com"
  - "+.tiktokv.com"
  - "+.tiktokcdn.com"
  - "+.path.com"
  - "+.discord.com"
  - "+.discus.com"
  - "+.line.me"
  - "+.pinterest.com"
  - "+.snapchat.com"
  - "+.kuaishou.com"
  - "+.weibo.com"
  - "+.qq.com"
  - "+.douyin.com"
  - "+.wechat.com"</pre>

## Config

Salin dan tempelkan ke dalam `config` anda.

<pre>rule-providers:
  Sosmed:
    type: file
    behavior: classical
    path: "./sosmed.yaml"</pre>

Kemudian salin kembali lalu tempelkan lagi di dalam `config`.

<pre>rules:
- RULE-SET,Sosmed,[isi nama group sosmed]</pre>

Sebagai contoh:

rules:
- RULE-SET,Sosmed,SOSMED

Jika sudah beres semua, silahkan untuk `save config` anda dan jalankan ulang `config` dengan menekan `switch config`
