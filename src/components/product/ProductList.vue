<template>
  <div>
    <div class="py-2">
      <b-button variant="outline-success" @click="sortDown">Sắp xếp giảm</b-button>
      <b-button class="ml-2" variant="outline-success" @click="sortUp">Sắp xếp tăng</b-button>
    </div>

    <ProductListItem v-for="item in productItems" :key="item.id" :product="item"/>
  </div>
</template>

<script>
import Vue from 'vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ProductListItem from "@/components/product/ProductListItem";
import {mapGetters} from "vuex";
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
export default {
  name: "ProductList",
  components: {ProductListItem},
  computed: {
    ...mapGetters(['productItems'])
  },
  created() {
    this.$store.dispatch('fetchProducts');
  },
  methods: {
    sortDown() {
      return this.productItems.sort((a, b) => b.price - a.price);
    },
    sortUp() {
      return this.productItems.sort((a, b) => a.price - b.price);
    }
  }
}
</script>

<style scoped>

</style>
