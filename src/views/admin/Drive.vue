<template>
  <div class="drive">
    drive
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  setup() {
    onMounted(() => {
      document.title = "盘设置 - Alist"
    })
  },
})
</script>
