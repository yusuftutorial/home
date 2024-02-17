---
title: File Simaster Loadbalance
keywords: simaster loabbalance
sidebar: file
toc: true
permalink: file-simaster-loadbalance.html
folder: file
comments: true
donasi: true
tags: [file]
---

## Firewall 3

Versi ini hanya di firewall 3 saja dan untuk firewall 4. Anda bisa melihat nya nanti di bawah.

Konfigurasi bisa anda salin di bawah ini

<pre>https://raw.githubusercontent.com/yusuftutorial/clash/main/configuration/mode%20loadbalance/simaster-loadbalance.yaml</pre>

kemudian tempelkan pada tab menu `config update`, nanti akan otomatis mengisi semua kebutuhan file proxies, proxy provider, proxy group, rule provider, ruleset, hingga ke script.

Jika nanti sudah terisi semua, anda bisa mengubah proxy anda yang awal adalah versi online menjadi offline di bagian config.

pada `proxy provider` ubah `http` menjadi `file` pada Sim1 dan Sim2. Begitu juga pada semua `rule provider` jika anda ingin semua nya menjadi offline.