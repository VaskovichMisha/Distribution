<template>
  <div class="distribution__container">
    <div class="distribution-header">
      <HeaderTabs />
      <div class="distribution-header__line"></div>

      <HeaderDropdown />
      <Button
          text="Создать рассылку"
          color="blue"
          @click="$router.push('/edit-distribution')"
      >
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 1V10" stroke="white" stroke-width="2" stroke-linecap="round"/>
          <path d="M10 5.5L1 5.5" stroke="white" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </Button>
    </div>
  </div>
</template>

<script>
import HeaderTabs from "@/components/UI/HeaderTabs/HeaderTabs.vue";
import Button from "@/components/UI/Button/Button.vue";
import HeaderDropdown from "@/components/UI/HeaderDropdown/HeaderDropdown.vue";
export default {
  components: {
    HeaderDropdown,
    Button,
    HeaderTabs
  }
}
</script>

<style lang="scss" scoped>
@import "header";
</style>