import githubAPI from '../../api/github';

const state = {
    code: null,
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
    },
    logout: ({ commit }) => {
        console.log('logout');
        commit('setCode', null);
    }
};

export default { state, getters, mutations, actions };