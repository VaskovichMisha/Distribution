<template>
  <div>
    <DistributionHeader />
    <RouterView />
  </div>
</template>

<script>
import DistributionHeader from "@/components/UI/DistrHeader/DistrHeader.vue";

export default {
  components: {DistributionHeader}

}
</script>

<style lang="scss" scoped>
@import "distribution";
</style>