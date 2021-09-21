export default {
    host: 'http://localhost:8080',
    deviceController: {
        controllerServerIP: 'http://192.168.1.189:8000',
        getStates: '/relays',
        setStates: '/relays'
    },
    github: {
        clientID: '4a8495585bb1c3214624',
        baseURL: 'https://github.com/login/oauth',
        accessCodeCallback: '/oauth/callback/access-code',
        tokenCallback: '/oauth/callback/token',
        defaultCallback: '/oauth/callback',
        accessCodeState: 'secret-sauce',
        clientSecret: null // only required for token request
    }

}