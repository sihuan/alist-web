<template>
  <div class="admin">
    <a-menu v-model:selectedKeys="current" mode="horizontal" @click="menuClick">
      <a-menu-item key="info">
        概览
      </a-menu-item>
      <a-menu-item key="drive">
        云盘
      </a-menu-item>
      <a-menu-item key="setting">
        设置
      </a-menu-item>
    </a-menu>
    <div class="admin-view">
      <router-view/>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  setup() {
    const current = ref<string[]>(['info']);
    const router = useRouter();
    onMounted(() => {
      router.push('/admin/info')
    })
    const menuClick = ({ item, key, keyPath }) => {
      router.push(key)
    }
    return {
      current,
      menuClick,
    };
  },
});
</script>

<style scoped>
.admin{
  margin: 10px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
.admin-view{
  min-height: 85vh;
}
</style>

