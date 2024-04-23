<template>
  <button class="D-button" :class="color">
    <slot></slot>
    {{ props.text }}
  </button>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({
  text: String,
  color: {
    type: String,
    default: 'blue'
  }
});
</script>

<style lang="scss" scoped>
@import "distrButton";
</style>