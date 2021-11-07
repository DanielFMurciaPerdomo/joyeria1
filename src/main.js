import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Inicio from './components/Inicio.vue'
import Anillos from './components/Anillos.vue'
import Aretes from './components/Aretes.vue'
import Pulseras from './components/Pulseras.vue'
import Gargantillas from './components/Gargantillas.vue'
import Dijes from './components/Dijes.vue'
import Contacto from './components/Contacto.vue'
Vue.use(VueRouter)
const routes = [
  {path:'/inicio', component:Inicio},
  {path:'/', component:Inicio},
  {path:'/anillos', component:Anillos},
  {path:'/aretes', component:Aretes},
  {path:'/pulseras', component:Pulseras},
  {path:'/gargantillas', component:Gargantillas},
  {path:'/dijes', component:Dijes},
  {path:'/contactos', component:Contacto},
]
const router= new VueRouter({
  routes,
  mode:'history'
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

