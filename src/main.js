import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyAFgR2SUfhU2BnAc4WQ6wIUVf1pokxp_MU',
  authDomain: 'vue-mobile-e2b4e.firebaseapp.com',
  projectId: 'vue-mobile-e2b4e',
  storageBucket: 'vue-mobile-e2b4e.appspot.com',
  messagingSenderId: '188088136553',
  appId: '1:188088136553:web:c16f488ee3a39a1f6d43f8',
}

initializeApp(firebaseConfig)

loadFonts()

createApp(App).use(router).use(vuetify).mount('#app')
