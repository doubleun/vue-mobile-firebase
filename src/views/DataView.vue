<template>
  <main class="data-management">
    <section class="reload-container">
      <v-btn variant="flat" rounded="pill" @click="handleFetchData"
        >Reload</v-btn
      >
    </section>

    <section v-if="!datas">Loading...</section>
    <section v-else class="data-items-container">
      <div
        v-for="(data, index) in displayDatas"
        :key="data?.API"
        class="data-item"
        @click="handleToggleButton(index)"
      >
        <p>
          {{ data?.API }}
        </p>
        <v-btn
          v-if="showIndex === index"
          variant="flat"
          color="grey"
          style="height: 100%; border-radius: 0px"
          @click.stop="handleHideData(index)"
          >HIDE</v-btn
        >
      </div>
    </section>
  </main>
</template>
<script>
import axios from 'axios'
import { onBeforeMount, ref } from 'vue'

export default {
  setup() {
    let datas = ref(undefined)
    let displayDatas = ref([])
    let showIndex = ref(undefined)

    const handleToggleButton = (index) => {
      if (showIndex.value === index) {
        showIndex.value = undefined
      } else {
        showIndex.value = index
      }
    }

    const handleFetchData = async () => {
      try {
        datas.value = undefined
        const res = await axios.get('https://api.publicapis.org/entries')
        datas.value = res?.data?.entries?.slice(0, 10) ?? []
        displayDatas.value = datas.value.map((data) => ({
          ...data,
          isShowButton: false,
        }))
      } catch (e) {
        console.error(e)
      }
    }

    const handleHideData = (index) => {
      displayDatas.value.splice(index, 1)
      showIndex.value = undefined
    }

    onBeforeMount(async () => {
      await handleFetchData()
    })

    return {
      datas,
      displayDatas,
      showIndex,
      handleHideData,
      handleFetchData,
      handleToggleButton,
    }
  },
}
</script>
<style>
.data-management {
  height: 100%;
  background-color: #3b81c8;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
}

.data-management .reload-container {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

.data-management .data-items-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

.data-items-container .data-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  width: 100%;
  box-sizing: border-box;
}

.data-items-container .data-item p {
  padding: 0.5rem 1rem 0.5rem 1rem;
}
</style>
