<template>
 <div>
   <b-container>
     <b-row>
       <div class="col-sm-7">
         <CartList/>
       </div>
       <div class="col-sm-5">
         <ProductList/>
       </div>
     </b-row>
   </b-container>
 </div>
</template>

<script>
import Vue from 'vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ProductList from "@/components/product/ProductList";
import CartList from "@/components/cart/CartList";
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

export default {
  name: 'App',
  components: {
    ProductList,
    CartList
  }
}
</script>

<style>

</style>
