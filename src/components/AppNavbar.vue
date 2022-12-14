<template>
  <v-navigation-drawer v-model="drawer" temporary class="py-5">
    <div style="display: flex; justify-content: center">
      <v-avatar color="info" size="160">
        <v-img alt="Profile" :src="photoURL" v-if="photoURL"></v-img>
        <p v-else>Profile</p>
      </v-avatar>
    </div>

    <v-list-item :title="name"></v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item title="Menu" value="menu"></v-list-item>
      <v-list-item
        prepend-icon="mdi-view-dashboard"
        title="Data management"
        value="data-management"
        @click="
          () => {
            $router.replace('/')
            drawer = !drawer
          }
        "
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-forum"
        title="Factorial"
        value="factorial"
        @click="
          () => {
            $router.replace('/factorial')
            drawer = !drawer
          }
        "
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-logout"
        title="Logout"
        value="logout"
        @click="handleLogout"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-main style="height: fit-content; padding-block: 0.5rem" class="navbar">
    <div class="d-flex justify-start align-center pl-2 h-100">
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <h3>{{ $route.name }}</h3>
    </div>
  </v-main>
</template>

<script>
import { ref, onBeforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export default {
  data() {
    return {
      drawer: null,
    }
  },
  setup() {
    const name = ref('')
    const photoURL = ref('')
    const router = useRouter()
    const route = useRoute()
    const auth = getAuth()

    onBeforeMount(() => {
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          router.replace('/login')
        } else if (route.path === '/login') {
          router.replace('/')
        }

        if (user) {
          // console.log('user', user)
          name.value = user.email.split('@')[0]
        }

        photoURL.value = user?.photoURL
      })
    })

    const handleLogout = async () => {
      try {
        await auth.signOut()
      } catch (e) {
        console.error('error: ', e)
      }
    }

    return {
      name,
      photoURL,
      handleLogout,
    }
  },
}
</script>

<style>
.navbar {
  background-color: #3b81c8;
  color: white;
}
</style>
