import qs from 'qs';
import config from '../config';

const OAUTH_CODE_QUERY_PARAMS = {
    client_id: config.github.clientID,
    redirect_uri: `${config.host}${config.github.accessCodeCallback}`,
    state: config.github.accessCodeState
};
const OAUTH_CODE_URL = `${config.github.baseURL}/authorize?${qs.stringify(OAUTH_CODE_QUERY_PARAMS)}`;

export default {
    getOauthCode() { window.location = OAUTH_CODE_URL; },
    // getOauthToken () {
    //     let OAUTH_TOKEN_QUERY_PARAMS = {
    //         client_id: config.github.clientID,
    //         client_secret: config.github.clientSecret,
    //         code = null, // retreived from initial oauth temporary code request
    //         redirect_uri: `${config.host}${config.github.tokenCallback}`,
    //     }
    //     let OAUTH_TOKEN_URL = null

    //     // perform GET to OAUTH_CODE_URL to get temporary code and set OAUTH_TOKEN_QUERY_PARAMS.code = code;
        
    //     OAUTH_TOKEN_URL = `${config.github.baseURL}/access_token?${qs.stringify(OAUTH_TOKEN_QUERY_PARAMS)}`;
    //     // perform POST to OAUTH_TOKEN_URL
    // }
};