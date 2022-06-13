<template>
  <component :is="componentName"></component>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import devLogin from './components/devLogin.vue'
import prodLogin from './components/prodLogin.vue'

export default defineComponent({
  name: 'loginIndex',
  components: { devLogin, prodLogin },
  setup() {
    const componentName = ref<String>(
      import.meta.env.VITE_APP_ENV === 'production' ? 'prodLogin' : 'devLogin'
    )

    return {
      componentName
    }
  }
})
</script>
