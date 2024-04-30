<template>
  <div class="all-recipients">
    <div class="all-recipients__wrapper">
      <div class="all-recipients__head">
        <div class="all-recipients__title">
          <img src="@/assets/svg/fi-sr-user.svg" alt="">
          <span>Получатели</span>
        </div>
        <img @click="closeAllRecipients" src="@/assets/svg/close-icon.svg" alt="close">
      </div>
      <div class="all-recipients__content">
        <Search
            placeholder="Найти по имени или логину"
        />
        <div class="all-recipients__container">

        </div>
      </div>
    </div>
    <div @click="closeAllRecipients" class="all-recipients__overlay"></div>
  </div>
</template>

<script setup lang="ts">
import Search from "@/components/UI/Search/Search.vue";

const emits = defineEmits([
    'close-all-recipients'
])

const closeAllRecipients = () => {
  emits('close-all-recipients')
}
</script>

<style lang="scss" scoped>
@import "allRecipients";
</style>