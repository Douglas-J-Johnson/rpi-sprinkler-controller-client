import axios from 'axios';
import qs from 'qs';

const BASE_URL = 'https://github.com/login/oauth/'
const CLIENT_ID = '4a8495585bb1c3214624';
// const CLIENT_SECRET = null; // only required for token request
const STATE = 'secret-sauce';

const OAUTH_CODE_QUERY_PARAMS = {
    client_id: CLIENT_ID,
    state: STATE
}
const OAUTH_CODE_URL = `${BASE_URL}/authorize?${qs.stringify(OAUTH_CODE_QUERY_PARAMS)}`;
// let OAUTH_TOKEN_QUERY_PARAMS = {
//     client_id: CLIENT_ID,
//     client_secret: CLIENT_SECRET,
//     code = null // retreived from initial oauth temporary code request
// }

export default {
    getOauthCode() {
        let code = null;
        // perform GET to OAUTH_CODE_URL
        // check that returned state matches STATE
        // set code to temporary code returned from request

        return code;
    },
    // async getOauthToken () {
    //     let token = null;
    //     let OAUTH_TOKEN_URL = null
    //     // perform GET to OAUTH_CODE_URL to get temporary code and set OAUTH_TOKEN_QUERY_PARAMS.code = code;
        
    //     OAUTH_TOKEN_URL = `${BASE_URL}/access_token?${qs.stringify(OAUTH_TOKEN_QUERY_PARAMS)}`;
    //     // perform POST to OAUTH_TOKEN_URL

    //     return token;
    // }
}