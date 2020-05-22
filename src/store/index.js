import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        products: [],
        cart: []
    },
    mutations: {
        SET_PRODUCT_DATA: (state, products) => {
            state.products = products;
        },
        ADD_TO_CART: (state, product) => {
            state.cart.push(product);
        }
    },
    actions: {
        GET_PRODUCTS({ commit }) {
            return axios("http://localhost:3000/products", {
                method: "GET",
            })
                .then((response) => {
                    commit("SET_PRODUCT_DATA", response.data);
                    return response.data;
                })
                .catch((err) => {
                    console.log(err);
                    return err;
                });
        },
        ADD_TO_CART({ commit }, product) {
            commit('ADD_TO_CART', product);
        }
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        },
        CART(state) {
            return state.cart;
        }
    },
});

export default store;
