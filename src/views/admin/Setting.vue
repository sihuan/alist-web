<template>
  <div class="setting">
    setting
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  setup() {
    onMounted(() => {
      document.title = "其他设置 - Alist"
    })
  },
})
</script>
