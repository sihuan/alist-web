<template>
  <div class="info">
    info
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  setup() {
    onMounted(() => {
      document.title = "概览 - Alist"
    })
  },
})
</script>
