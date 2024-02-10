---
title: Rule Bank
keywords: bank
sidebar: clash
toc: false
permalink: rule-bank.html
folder: clash
comments: true
tags: [clash]
---

## Rule Provider

Taruh ke dalam file baru dengan nama `bank.yaml` di dalam folder `rule_provider`.

<pre>payload:

  # > RULE BY SIMASTER
  - "+.bri.co.id"
  - "+.bni.co.id"
  - "+.klikbca.com"
  - "+.mandiri.co.id"
  - "+.bankbsi.co.id"
  - "+.cimbniaga.co.id"
  - "+.bankjateng.co.id"
  - "+.bankkalsel.co.id"
  - "+.bankaceh.co.id"
  - "+.banksumut.co.id"
  - "+.banknagari.co.id"
  - "+.banklampung.co.id"
  - "+.bankbandung.co.id"
  - "+.bankkalteng.co.id"
  - "+.bankkaltim.co.id"
  - "+.bankkalbar.co.id"
  - "+.bankkaltara.co.id"
  - "+.banksulsel.co.id"
  - "+.banksulteng.co.id"
  - "+.banksultra.co.id"
  - "+.banksulbar.co.id"
  - "+.banksultim.co.id"
  - "+.bankpapua.co.id"</pre>

## Config

Salin dan tempelkan ke dalam `config` anda.

<pre>rule-providers:
  Bank:
    type: file
    behavior: domain
    path: "./rule_provider/bank.yaml"</pre>

Kemudian salin kembali lalu tempelkan lagi di dalam `config`.

<pre>rules:
- RULE-SET,Bank,[isi nama group bank]</pre>

Sebagai contoh:

rules:
- RULE-SET,Bank,BANK

Jika sudah beres semua, silahkan untuk `save config` anda dan jalankan ulang `config` dengan menekan `switch config`
