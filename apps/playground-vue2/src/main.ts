import Vue from 'vue'
import GoogleTranslateSelect from '@google-translate-select/vue2'
import App from './App.vue'
// import 'v-google-translate/umd/style.css'
import './style.css'

Vue.use(GoogleTranslateSelect)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
