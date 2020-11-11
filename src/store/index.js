import Vue from 'vue';
import Vuex from 'vuex'

import productModule from "@/store/product";
import cartModule from "@/store/cart";

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        product:productModule,
        cart:cartModule
    }
})
