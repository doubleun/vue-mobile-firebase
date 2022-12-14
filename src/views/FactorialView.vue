<template>
  <main class="factorial">
    <section class="factorial-content-container">
      <div style="display: flex; flex-direction: column; gap: 1rem">
        <v-text-field
          placeholder="Number..."
          type="number"
          hide-details
          class="factorial-input"
          v-model="inputNumber"
        ></v-text-field>

        <div style="width: fit-content; align-self: flex-end">
          <v-btn variant="flat" color="purple" @click="handleCalFactorial"
            >Submit</v-btn
          >
        </div>
      </div>

      <h1 style="color: white">Result</h1>
      <h2 style="color: white">( {{ result }} )</h2>
    </section>
  </main>
</template>
<script>
import { ref } from 'vue'
import numeral from 'numeral'

export default {
  setup() {
    let result = ref(1)
    const inputNumber = ref('')

    const handleCalFactorial = () => {
      const num = Number(inputNumber.value)
      result.value = 1
      if (!num || Number.isNaN(num) || num < 0) {
        result.value = 'Invalid value'
        return
      } else {
        let format = '0,0'
        for (let i = 2; i <= num; i++) {
          result.value *= i
        }
        if (result.value > Number.MAX_SAFE_INTEGER) format = '0,0e+0'
        if (result.value === Infinity) {
          result.value = 'INF'
        } else {
          result.value = numeral(result.value).format(format)
        }
      }
    }
    return {
      result,
      inputNumber,
      handleCalFactorial,
    }
  },
}
</script>
<style>
.factorial {
  height: 100%;
  background-color: #3b81c8;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.factorial-content-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  width: 100%;
}

.factorial .factorial-input {
  background-color: white;
  border-radius: 1rem;
}

.factorial .factorial-input .v-field__outline {
  display: none;
}
</style>
