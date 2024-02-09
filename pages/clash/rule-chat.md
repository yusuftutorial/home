---
title: Rule Chat
keywords: chat
sidebar: clash
toc: false
permalink: rule-chat.html
folder: clash
comments: true
tags: [clash]
---

## Rule Provider

Taruh ke dalam file baru dengan nama `chat.yaml` di dalam folder `rule_provider`.

<pre>payload:

  # > RULE BY SIMASTER
  - "+.whatsapp.com"
  - "+.whatsapp.net"
  - "+.line.me"</pre>

## Config

Salin dan tempelkan ke dalam `config` anda.

<pre>rule-providers:
  Chat:
    type: file
    behavior: classical
    path: "./rule_provider/chat.yaml"</pre>

Kemudian salin kembali lalu tempelkan lagi di dalam `config`.

<pre>rules:
- RULE-SET,Chat,[isi nama group chat]</pre>

Sebagai contoh:

rules:
- RULE-SET,Chat,CHAT

Jika sudah beres semua, silahkan untuk `save config` anda dan jalankan ulang `config` dengan menekan `switch config`
