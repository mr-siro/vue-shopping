import axios from 'axios'
import {API_ENDPOINT} from "@/constants/Domain";
const state = {
    productItems: []
};
const getters = {
    productItems(state) {
        return state.productItems;
    }
};
const mutations = {
    UPDATE_PRODUCT_ITEMS(state,payload) {
        state.productItems = payload;
    }
};
const actions = {
    async fetchProducts(context) {
        const {data} = await axios.get(`${API_ENDPOINT}/products`);
        context.commit('UPDATE_PRODUCT_ITEMS', data);
    }
};

const productModule = {
    state,
    getters,
    mutations,
    actions
};
export default productModule;
