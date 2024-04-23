<template>
  <div class="distribution-item">
    <div class="distribution-item__title">{{ props.item?.title }}</div>
    <div class="distribution-item__source">@ifaceup_bot</div>
    <div class="distribution-item__statistic">
      <div class="distribution-item__statistic-item">
        <img src="@/assets/svg/sr-user.svg" alt="">
        <span>234</span>
      </div>
      <div class="distribution-item__statistic-item">
        <img src="@/assets/svg/sr-paper-plane.svg" alt="">
        <span>0</span>
      </div>
      <div class="distribution-item__statistic-item">
        <img src="@/assets/svg/sr-click.svg" alt="">
        <span>0</span>
      </div>
    </div>
    <DistrDropdownOptions />
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import DistrDropdownOptions from "@/components/UI/DistrDropdownOptions/DistrDropdownOptions.vue";

const props = defineProps({
  item: Object as () => { title?: string }
})

</script>

<style lang="scss" scoped>
@import "distributionItem";
</style>