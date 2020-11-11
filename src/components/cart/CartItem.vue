<template>
  <tr>
    <td>{{cartItem.title}}</td>
    <td>
      <label>
        <input type="number" class="form-control" min="1" style="width:100px" v-model="cartItem.qty"/>
      </label>
    </td>
    <td>$ {{total}}</td>
    <td>
      <b-button variant="danger" @click="removeItem(cartItem)">Remove</b-button>
    </td>
  </tr>
</template>

<script>
import Vue from 'vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {CartModel} from "@/models";
import {mapActions} from 'vuex';

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
export default {
  name: "CartItem",
  props:{
    cartItem:CartModel
  },
  methods:{
    ...mapActions(['removeItem'])
  },
  computed:{
    total() {
      return (this.cartItem.qty * this.cartItem.price).toFixed(2);
    }
  }
}
</script>

<style scoped>

</style>
