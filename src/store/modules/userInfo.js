const state = {
    account: {
        username: "",
        isLogin: false
    }
};

const actions = {};

const mutations = {
    loginSuccess(state, account) {
        state.account.username = account.username;
        state.account.isLogin = true
    },
    loginOut(state) {
        state.account = {
            username: "",
            isLogin: false
        }
    }
};

export default {
    state,
    actions,
    mutations
}