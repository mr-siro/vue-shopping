<template>
<b-card class="product-card">
  <b-card-header>{{product.title}}</b-card-header>
  <b-card-body>
    <p class="card-text">{{product.description}}</p>
    <p class="text-primary"> $ {{product.price}} </p>
    <b-button variant="outline-primary" @click="addToCart(product)">Add to cart</b-button>

  </b-card-body>
</b-card>
</template>

<script>
import Vue from 'vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {ProductModel} from "@/models";
import {mapActions} from 'vuex'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
export default {
  name: "ProductListItem",
  props:{
    product:ProductModel
  },
  methods:{
    ...mapActions(['addToCart'])
  }
}
</script>

<style scoped>
.product-card {
  margin-bottom: 10px;
}
</style>
