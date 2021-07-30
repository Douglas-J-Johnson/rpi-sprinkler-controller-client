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
    logout: ({ commit }) => { commit('setToken', null); }
};

export default { state, getters, mutations, actions }