---
title: Proxy Shadowsocks
keywords: proxy shadowsocks
sidebar: clash
toc: false
permalink: proxy-shadowsocks.html
folder: clash
comments: true
donasi: true
tags: [clash]
---

```yaml
# shadowsocks
# The supported ciphers(encrypt methods):
#   aes-128-gcm aes-192-gcm aes-256-gcm
#   aes-128-cfb aes-192-cfb aes-256-cfb
#   aes-128-ctr aes-192-ctr aes-256-ctr
#   rc4-md5 chacha20-ietf xchacha20
#   chacha20-ietf-poly1305 xchacha20-ietf-poly1305

- name: "ss1"
  type: ss
  server: server
  port: 443
  cipher: chacha20-ietf-poly1305
  password: "password"
  udp: true
```

## hapus konfiguration obfs lama remove sebelum memperbarui

```yaml
- name: "ss2"
  type: ss
  server: server
  port: 443
  cipher: chacha20-ietf-poly1305
  password: "password"
  plugin: obfs
  plugin-opts:
    mode: tls # or http
    #  host: bing.com
```

## Shadowsocks Versi 3

```yaml
- name: "ss3"
  type: ss
  server: server
  port: 443
  cipher: chacha20-ietf-poly1305
  password: "password"
  plugin: v2ray-plugin
  plugin-opts:
    mode: websocket # no QUIC now
    tls: true # wss
    skip-cert-verify: true
    host: bing.com
    path: "/"
    headers:
       custom: value
```

## shadowsocksR

```yaml
#The supported shadowsocksR ciphers(encrypt methods):
#aes-128-cfb aes-192-cfb    aes-256-cfb
#aes-128-ctr aes-192-ctr    aes-256-ctr
#rc4-md5     chacha20-ietf  xchacha20

#The supported shadowsocksR obfses:
#plain       http_simple         http_post
#random_head tls1.2_ticket_auth  tls1.2_ticket_fastauth

#The supported shadowsocksR protocols: 
#origin           auth_sha1_v4 auth_aes128_md5
#auth_aes128_sha1 auth_chain_a auth_chain_b

- name: "ssr"
  type: ssr
  server: server
  port: 443
  cipher: chacha20-ietf
  password: "password"
  obfs: tls1.2_ticket_auth
  protocol: auth_sha1_v4
   obfs-param: domain.tld
   protocol-param: "#"
   udp: true
```