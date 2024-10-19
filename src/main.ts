import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './views/Home.vue'
import Schedule from './views/Schedule.vue'
import Contact from './views/Contact.vue'
import store from './store'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/schedule', component: Schedule },
    { path: '/contact', component: Contact },
  ]
})

createApp(App).use(store).use(router).mount('#app')