import Vue from 'vue'
import App from './App.vue'
import {fireInit} from './helpers/firebaseHelpers'
import store from './vuex/store'
import Vuex from 'vuex'

fireInit()

Vue.use(Vuex)

new Vue({
  el: 'body',
  components: { App },
  store
})