<template>
  <div class="preview">
    <!-- 无法预览，显示下载与直链 -->
    <a-result :title="file.name" v-if="true">
      <template #icon>
        <component :is="file.icon" class="file-icon" />
      </template>
      <template #extra>
        <!-- <a target="_blank" :href="downloadUrl">
          <a-button type="primary">下载</a-button>
        </a> -->
        <a-button type="primary" @click="copyTransTexts(file)">复制秒传链接</a-button>
      </template>
    </a-result>
  </div>
</template>

<script lang="ts">
import { FileProps, GlobalDataProps } from "@/store";
import { getIcon } from "@/utils/get_icon";
import { message } from "ant-design-vue";
import {
  computed,
  defineComponent,
} from "vue";
import { useStore } from "vuex";
import "aplayer/dist/APlayer.min.css";
import { copyToClip } from "@/utils/copy_clip";

export default defineComponent({
  name: "Preview",
  setup() {
    const store = useStore<GlobalDataProps>();
    const file = computed<FileProps>(() => {
      const res = store.state.data as FileProps;
      res.icon = getIcon(res);
      return res;
    });
    const copyTransTexts = (item: FileProps) => {
      copyToClip(
        `aliyunpan://${item.name}|${item.content_hash}|${item.size}|${item.content_type}`
      );
      message.success("已复制秒传文本.");
    };

    return {
      file,
      copyTransTexts,
    };
  },
});
</script>

<style scoped>
.video-preview {
  width: 100%;
  margin-top: 5px;
}
/* @media screen and (min-width: 600px) {
  #video-preview{
    height: 80vh;
  }
} */
.iframe-preview {
  width: 100%;
  height: 80vh;
  box-sizing: inherit;
}
.doc-preview {
  width: 100%;
  height: 80vh;
}
.img-preview {
  width: 100%;
  height: 80vh;
}
.img-preview img {
  max-width: 100%;
  max-height: 100%;
  display: block;
  margin: auto;
}
</style>
