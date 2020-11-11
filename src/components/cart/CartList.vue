<template>
<div>
  <p class="lead">Product Cart</p>
  <table class="table">
    <thead class="thead-light">
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>
      <th scope="col">Remove</th>
    </tr>
    </thead>
    <tbody>
    <CartItem v-for="item in cartItems" :key="item.id" :cartItem="item"/>
    </tbody>
  </table>
  <hr/>
  <b-button variant="success" size="lg">Checkout <span>(${{cartTotal}})</span></b-button>
</div>
</template>

<script>
import Vue from 'vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import CartItem from "@/components/cart/CartItem";
import {mapGetters} from "vuex";
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
export default {
name: "CartList",
  components: {CartItem},
  computed:{
  ...mapGetters(['cartItems','cartTotal'])
  },
  created() {
  this.$store.dispatch('fetchCart')
  }
}
</script>

<style scoped>

</style>
