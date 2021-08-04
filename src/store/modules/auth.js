import { router } from '../../main'
import githubAPI from '../../api/github';

const CODE_KEY_NAME = 'github_code';

const state = {
    code: window.localStorage.getItem(CODE_KEY_NAME),
    // token: null
};

const getters = {
    isLoggedIn: (state) => { return (state.code ? true : false); },
    getCode: (state) => { return state.code; }
};

const mutations = {
    setCode: (state, code) => { state.code = code; },
    // setToken: (state, token) => { state.token = token; }
};

const actions = {
    login: () => {
        githubAPI.getOauthCode();
    },
    finalizeLogin: ({ commit }, code) => {
        commit('setCode', code);
        window.localStorage.setItem(CODE_KEY_NAME, code);

        router.push('/');
    },
    logout: ({ commit }) => {
        commit('setCode', null);
        window.localStorage.removeItem(CODE_KEY_NAME);
    }
};

export default { state, getters, mutations, actions };