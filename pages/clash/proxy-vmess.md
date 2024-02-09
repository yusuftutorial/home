---
title: Proxy Vmess
keywords: proxy vmess
sidebar: clash
toc: false
permalink: proxy-vmess.html
folder: clash
comments: true
donasi: true
tags: [clash]
---

```yaml
# cipher support auto/aes-128-gcm/chacha20-poly1305/none

- name: "vmess"
  type: vmess
  server: server
  port: 443
  uuid: uuid
  alterId: 32
  cipher: auto
  udp: true
  tls: true
  skip-cert-verify: true
  servername: example.com # priority over wss host
  network: ws
  ws-opts:
    path: /path
    headers:
      Host: v2ray.com
    max-early-data: 2048
    early-data-header-name: Sec-WebSocket-Protocol
```

## Vmess HTTP

```yaml
- name: "vmess-http"
  type: vmess
  server: server
  port: 443
  uuid: uuid
  alterId: 32
  cipher: auto
  udp: true
  network: http
  http-opts:
    method: "GET"
    path:
      - '/'
      - '/video'
    headers:
      Connection:
        - keep-alive
```