<template>
  <section class="login">
    <div class="title-container">
      <h1>
        Flutter Exam 01 <br />
        Tri7Solution
      </h1>
    </div>

    <v-avatar color="info" size="160"> Profile </v-avatar>

    <div class="username-password-container">
      <v-text-field
        v-model="username"
        color="primary"
        placeholder="Username"
        variant="outlined"
        rounded
      ></v-text-field>
      <v-text-field
        v-model="password"
        color="primary"
        placeholder="Password"
        variant="outlined"
        type="password"
      ></v-text-field>

      <div style="width: 100%; display: flex; justify-content: center">
        <v-btn
          rounded="pill"
          size="x-large"
          variant="flat"
          color="primary"
          @click="handleLogin"
        >
          Login
        </v-btn>
      </div>

      <div class="or-container">
        <div class="divider"></div>
        <h3>OR</h3>
        <div class="divider"></div>
      </div>

      <div style="display: flex; justify-content: center">
        <v-btn variant="flat" size="x-large" @click="handleLoginWithGoogle"
          >Login with Google</v-btn
        >
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'

// Components

export default defineComponent({
  name: 'LoginView',
  setup() {
    const username = ref('')
    const password = ref('')
    const provider = new GoogleAuthProvider()
    const auth = getAuth()

    const handleLogin = async () => {
      try {
        console.log('username', username.value)
        console.log('password', password)
        const data = await signInWithEmailAndPassword(
          auth,
          username.value,
          password.value
        )
        console.log('data', data)
      } catch (e) {
        console.log('error: ', e.message)
      }
    }

    const handleLoginWithGoogle = async () => {
      try {
        await signInWithPopup(auth, provider)
      } catch (e) {
        console.log('error: ', e.message)
      }
    }
    return {
      handleLogin,
      handleLoginWithGoogle,
      username,
      password,
    }
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
