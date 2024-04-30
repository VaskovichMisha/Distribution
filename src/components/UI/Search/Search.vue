<template>
  <div class="distribution-search">
    <img src="@/assets/svg/search.svg" alt="search">
    <input type="text" :placeholder="placeholder">
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
  placeholder: {
    type: String,
    default: ''
  }
})

</script>

<style lang="scss" scoped>
@import "search";
</style>