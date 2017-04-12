# Related API Demo
A demo website for Ooyala Ingestion Log API

## Prerequisite
git, Node.js version 6+

## Install
```
$ git clone git@github.com:kuu/ois-dashboard-mini.git
$ cd ois-dashboard-mini
$ npm install
$ npm run build
```

## Config
Put a config file in your work directory.
```js
$ mkdir config
$ vi config/default.json
{
  "server": {
    "host": "localhost",
    "port": 6666,
    "secure": true
  },
  "api": {
    "key": "Your Ooyala API Key",
    "secret": "Your Ooyala API Secret"
  }
}
```

## Run (Development)
```
$ npm run watch
[Ctrl]-[C] to stop.
```

## Run (Production)
```
$ npm start
"npm stop" to stop.
```
