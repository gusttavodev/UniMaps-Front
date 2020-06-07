import loginApi from "./services/loginApi"

const user = loginApi.getLocalUser()

export default {
    state: {
        currentUser: user,
        issLoggedIn: !!user,
        loading: false,
        auth_error: null,
        customers: []
    },
    getters: {
        isLoading(state) {
            return state.loading
        },
        issLoggedIn(state) {
            return state.issLoggedIn
        },
        auth_error(state) {
            return state.auth_error
        },
        customers(state) {
            return state.customers
        }
    },
    mutations: {
        login(state) {
            state.loading = true
            state.auth_error
        },
        loginSucess(state, payload) {
            state.auth_error = null
            state.issLoggedIn = true
            state.auth_error = null
            state.currentUser = payload
            localStorage.setItem("user", JSON.stringify(state.currentUser))
            
        },
        loginFailed(state, payload) {
            state.loading = false
            state.auth_error = payload
        },
        logout(state) {
            localStorage.removeItem("user")
            state.issLoggedIn = false
            state.currentUser = null
        }
    },
    actions: {
        login(context) {
            context.commit("login")
        }
    }
}