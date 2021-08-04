import qs from 'qs';

const BASE_URL = 'https://github.com/login/oauth'
const CLIENT_ID = '4a8495585bb1c3214624';
const CODE_REDIRECT_URI = 'http://localhost:8080/oauth/callback/access-code'
const TOKEN_REDIRECT_URI = 'http://localhost:8080/oauth/callback/token'
const STATE = 'secret-sauce';
// const CLIENT_SECRET = null; // only required for token request

const OAUTH_CODE_QUERY_PARAMS = {
    client_id: CLIENT_ID,
    redirect_uri: CODE_REDIRECT_URI,
    state: STATE
}
const OAUTH_CODE_URL = `${BASE_URL}/authorize?${qs.stringify(OAUTH_CODE_QUERY_PARAMS)}`;

export default {
    getOauthCode() {
        window.location = OAUTH_CODE_URL;
    },
    // getOauthToken () {
    //     let OAUTH_TOKEN_QUERY_PARAMS = {
    //         client_id: CLIENT_ID,
    //         client_secret: CLIENT_SECRET,
    //         code = null // retreived from initial oauth temporary code request
    //     }
    //     let OAUTH_TOKEN_URL = null

    //     // perform GET to OAUTH_CODE_URL to get temporary code and set OAUTH_TOKEN_QUERY_PARAMS.code = code;
        
    //     OAUTH_TOKEN_URL = `${BASE_URL}/access_token?${qs.stringify(OAUTH_TOKEN_QUERY_PARAMS)}`;
    //     // perform POST to OAUTH_TOKEN_URL
    // }
}