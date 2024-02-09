---
title: Rule Stream
keywords: stream
sidebar: clash
toc: false
permalink: rule-stream.html
folder: clash
comments: true
tags: [clash]
---

## Rule Provider

Taruh ke dalam file baru dengan nama `stream.yaml` di dalam folder `rule_provider`.

<pre>payload:

  # > RULE BY SIMASTER
  - "+.youtube.com"
  - "+.youtubekids.com"
  - "+.youtubeedication.com"
  - "+.googlevideo.com"
  - "+.ggpht.com"
  - "+.gvt1.com"
  - "+.gvt2.com"
  - "+.ytimg.com"
  - "+.netflix.com"
  - "+.movi.com"
  - "+.hbo.com"
  - "+.m3u"
  - "+.wetv.vip"
  - "+.iflix.com"
  - "+.amazon.com"
  - "+.vidio.com"
  - "+.restream.io"
  - "+.rctiplus.com"
  - "+.transtv.co.id"
  - "+.netmedia.co.id"
  - "+.hotstar.com"
  - "+.visionplus.id"
  - "+.kompas.tv"
  - "+.tvonenews.com"
  - "+.inews.id"
  - "+.cnnindonesia.com"
  - "+.streamlabs.com"
  - "+.twitch.tv"
  - "+.nimo.tv"
  - "+.obsproject.com"</pre>

## Config

Salin dan tempelkan ke dalam `config` anda.

<pre>rule-providers:
  Stream:
    type: file
    behavior: classical
    path: "./rule_provider/stream.yaml"</pre>

Kemudian salin kembali lalu tempelkan lagi di dalam `config`.

<pre>rules:
- RULE-SET,Stream,[isi nama group stream]</pre>

Sebagai contoh:

rules:
- RULE-SET,Stream,STREAM

Jika sudah beres semua, silahkan untuk `save config` anda dan jalankan ulang `config` dengan menekan `switch config`