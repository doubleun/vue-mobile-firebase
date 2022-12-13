<template>
  <v-app>
    <v-main>
      <AppNavbar v-if="$route.path !== '/login'" />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue'

export default {
  name: 'App',

  components: {
    AppNavbar,
  },
}
</script>

<style>
html,
body {
  height: -webkit-fill-available;
}
</style>
