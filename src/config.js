export default {
    host: 'http://localhost:8080',
    github: {
        clientID: '4a8495585bb1c3214624',
        baseURL: 'https://github.com/login/oauth',
        accessCodeCallback: '/oauth/callback/access-code',
        accessCodeState: 'secret-sauce',
        tokenCallback: '/oauth/callback/token',
        clientSecret: null // only required for token request
    }

}