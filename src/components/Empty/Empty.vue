<template>
  <div class="distribution-empty">
    <img src="@/assets/image/sr-megaphone.png" alt="">
    <div class="distribution-empty__text">
      <div class="distribution-empty__title">У вас пока нет рассылок</div>
      <span>Создайте рассылку, чтобы начать пользоваться сервисом</span>
    </div>
    <Button
        text="Создать рассылку"
        color="blue"
        @click="openCreateDistribution"
    >
      <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.5 1V10" stroke="white" stroke-width="2" stroke-linecap="round"/>
        <path d="M10 5.5L1 5.5" stroke="white" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </Button>
  </div>
</template>

<script lang="ts" setup>
import Button from "@/components/UI/Button/Button.vue";

const emits = defineEmits([
    'open-create-distribution'
])

const openCreateDistribution = () => {
  emits('open-create-distribution')
}
</script>

<style lang="scss" scoped>
@import "empty";
</style>