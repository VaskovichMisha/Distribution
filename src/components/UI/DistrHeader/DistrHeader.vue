<template>
  <div class="distribution__container">
    <div class="distribution-header">
      <HeaderTabs />
      <div class="distribution-header__line"></div>
    </div>
  </div>
</template>

<script>
import HeaderTabs from "@/components/UI/DistrHeaderTabs/DistrHeaderTabs.vue";
export default {
  components: {
    HeaderTabs
  }
}
</script>

<style lang="scss" scoped>
@import "distrHeader";
</style>