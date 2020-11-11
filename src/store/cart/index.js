import axios from "axios";
import {API_ENDPOINT} from "@/constants/Domain";

const state = {
    cartItems: []
};
const getters = {
    cartItems(state) {
        return state.cartItems;
    },
    cartTotal(state) {
        let sum = 0
        const sumA = (arr, x) => {
            if(x === 0) {
                return 0
            } else if(x === 1) {
                return arr[0].qty * arr[0].price
            } else {
                return sumA(arr, x-1) + (arr[x -1].qty * arr[x-1].price)
            }
        }
        sum = sumA(state.cartItems, state.cartItems.length)
        return sum.toFixed(2);
    }
};
const mutations = {
    UPDATE_CART_ITEMS(state, payload) {
        state.cartItems = payload
    },
    ADD_CART_ITEMS(state, payload) {
        state.cartItems.push(payload)
    },
    DELETE_ITEM(state, payload) {
        const index = state.cartItems.findIndex(item => item.id === payload.id);
        state.cartItems.splice(index, 1);
    }
};
const actions = {
    async fetchCart(context) {
        const {data} = await axios.get(`${API_ENDPOINT}/cart`);
        context.commit('UPDATE_CART_ITEMS', data)
    },
    async addToCart(context, payload) {
        payload.id = Date.now().toString();
        const {data} = await axios.post(`${API_ENDPOINT}/cart`, payload);
        context.commit('ADD_CART_ITEMS', data)
    },
    async removeItem(context, payload) {
        await axios.delete(`${API_ENDPOINT}/cart/${payload.id}`);
        context.commit('DELETE_ITEM', payload);
    }
};

const cartModule = {
    state,
    getters,
    mutations,
    actions
};
export default cartModule;
