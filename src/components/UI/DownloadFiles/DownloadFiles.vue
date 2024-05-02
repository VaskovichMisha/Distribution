<template>
  <div class="resetting-condition">
    <span class="resetting-condition__title">Перейти в Telegram для загрузки файлов?</span>
    <div class="resetting-condition__buttons">
      <Button
          text="Перейти"
          color="blue"
      />
      <Button
          text="Отменить"
          color="white"
          @click="cancelDownloadFiles"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/UI/Button/Button.vue";

const emits = defineEmits([
  'cancel-download-files',
])

const cancelDownloadFiles = () => {
  emits('cancel-download-files')
}

</script>

<style scoped lang="scss">
@import "downloadFiles";
</style>