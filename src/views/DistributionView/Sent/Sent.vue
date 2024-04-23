<template>
  <div class="distribution__container">
    <div v-if="false" class="sent">
      <div class="sent__head">
        <DistributionSearch />
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
      <DistributionList />
    </div>

    <DistributionEmpty v-if="false" />
    <DistributionNotFound />
  </div>
</template>

<script lang="ts" setup>
import DistributionSearch from "@/components/UI/DistrSearch/DistrSearch.vue";
import DistributionList from "@/components/DistributionList/DistributionList.vue";
import DistrButton from "@/components/UI/DistrButton/DistrButton.vue";
import DistributionNotFound from "@/components/DistributionNotFound/DistributionNotFound.vue";
import DistributionEmpty from "@/components/DistributionEmpty/DistributionEmpty.vue";
import router from "@/router";

</script>

<style lang="scss" scoped>
@import "sent";
</style>