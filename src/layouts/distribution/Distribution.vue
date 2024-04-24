<template>
  <div>
    <DistributionHeader />
    <RouterView />
  </div>
</template>

<script>
import DistributionHeader from "@/components/Header/Header.vue";

export default {
  components: {DistributionHeader}

}
</script>

<style lang="scss" scoped>
@import "distribution";
</style>