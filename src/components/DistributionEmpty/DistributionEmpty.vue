<template>
  <div class="distribution-empty">
    <img src="@/assets/image/sr-megaphone.png" alt="">
    <div class="distribution-empty__text">
      <div class="distribution-empty__title">У вас пока нет рассылок</div>
      <span>Создайте рассылку, чтобы начать пользоваться сервисом</span>
    </div>
    <DistrButton
        text="Создать рассылку"
        color="blue"
        @click="$router.push('/edit-distribution')"
    >
      <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.5 1V10" stroke="white" stroke-width="2" stroke-linecap="round"/>
        <path d="M10 5.5L1 5.5" stroke="white" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </DistrButton>
  </div>
</template>

<script lang="ts" setup>
import DistrButton from "@/components/UI/DistrButton/DistrButton.vue";
</script>

<style lang="scss" scoped>
@import "distributionEmpty";
</style>