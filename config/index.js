module.exports = {
  "app": {
      "name": process.env.APP_NAME || "nuxtbase",
      "env": process.env.NODE_ENV || "development",
      "host": process.env.HOST || "127.0.0.1",
      "port": process.env.POST || "3000"
  },
  "wrike": {
    "oauth": {
      "authorizationURL": process.env.WRIKE_AUTH_URL || "https://www.wrike.com/oauth2/authorize",
      "tokenURL": process.env.WRIKE_TOKEN_URL || "https://www.wrike.com/oauth2/token",
      "clientID": process.env.WRIKE_CLIENT_ID || "0IMaredh",
      "clientSecret": process.env.WRIKE_CLIENT_SECRET || "GfAZV7imRIERXwXhSsL8jTW5eW4aEyasO2t8iM8YI7Na4LRSi0IOKfa1sPlEQdDj",
      "callbackURL": "http://127.0.0.1:3000/auth/callback"
    }
  },
  "mongodb": {
    "uri": "mongodb://localhost:32768/wrikeapiconsole",
    "options": {
      "user": "",
      "pass": ""
    }
  }
}
