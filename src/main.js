import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Inicio from './components/Inicio.vue'
import Anillos from './components/Anillos.vue'
import Aretes from './components/Aretes.vue'
Vue.use(VueRouter)
const routes = [
  {path:'/inicio', component:Inicio},
  {path:'/', component:Inicio},
  {path:'/anillos', component:Anillos},
  {path:'/aretes', component:Aretes},
]
const router= new VueRouter({
  routes,
  mode:'history'
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// import Vue from 'vue'
// import App from './App.vue'    
// import VueRouter from 'vue-router'

// import Proyectos from './components/Proyectos.vue'
// import Habilidades from './components/Habilidades.vue'
// import Experiencia from './components/Experiencia.vue'
// import Contacto from './components/Contacto.vue'
// Vue.config.productionTip = false

// Vue.use(VueRouter)
// const routes = [
//   {path:'/inicio', component:Inicio},
//   {path:'/', component:Inicio},
//   {path:'/proyectos', component:Proyectos},
//   {path:'/habilidades', component:Habilidades},
//   {path:'/experiencia', component:Experiencia},
//   {path:'/contacto', component:Contacto},
// ]
// const router= new VueRouter({
//   routes,
//   mode:'history'
// })
// new Vue({
//   router,
//   render: h => h(App),
// }).$mount('#app')
