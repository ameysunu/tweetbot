# Twitter Bot

A Retweet bot which retweets #Flutter, #FlutterDev and #FlutterEngage.

## Getting started

1. Install dependencies

```bash
$ npm install
```
2. Create ``config.ts`` file in ``src`` and add the following code:

```
module.exports = {
    consumer_key: 'CONSUMER_KEY',
    consumer_secret: 'CONSUMER_SECRET',
    access_token: 'ACCESS_TOKEN',
    access_token_secret: 'ACCESS_TOKEN_SECRET'
}
```
The API Keys can be found by going to [Twitter Developers Portal](https://developer.twitter.com/) and submitting an API key request.

3. Launch app in dev mode

```bash
$ yarn dev
```