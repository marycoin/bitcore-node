# P2P Service

The p2p service provides a peer-to-peer interface for the Marycoin blockchain. This service abstracts the connection and commnuication interface between the Marycoin and the rest of bitcore node.


This service also provides the publisher interface on bitcore-node bus architecture. The P2P service will publish header, block and transaction events.

## Service Configuration

```json
"p2p": {
  "peers": [
  { "ip": { "v4": "127.0.0.1" }, "port": 33333 }
  ]
}
```

## Other services this service Depends on

None

