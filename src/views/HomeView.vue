<template>
  <!-- <HelloWorld /> -->
  <section class="home">
    <h2>HOME</h2>
  </section>
</template>

<script>
import { defineComponent } from 'vue'

// Components
// import AppNavbar from '../components/AppNavbar.vue'

export default defineComponent({
  name: 'HomeView',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  // components: {
  //   AppNavbar,
  // },
  methods: {
    handleLogin() {
      console.log('logged in')
    },
  },
})
</script>

<style>
.login {
  height: 100%;
  background-color: #3b81c8;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.login .title-container {
  display: flex;
  justify-content: center;
  text-align: center;
}

.login .title-container h1 {
  color: white;
  font-style: italic;
  font-size: 28px;
}

.login .username-password-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.8rem;
}

.login .username-password-container input {
  background-color: white;
}

.or-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.or-container .divider {
  border-block-end: 3px solid black;
  border-color: #707070;
  width: 100%;
}
</style>
