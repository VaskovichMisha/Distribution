<template>
  <div class="distribution__container">
    <div v-if="false" class="planned">
      <div class="planned__head">
        <Search
            placeholder="Введите название рассылки для поиска"
        />
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
      <DistributionList />
    </div>

    <Empty />
    <NotFound v-if="false" />
  </div>
</template>

<script setup lang="ts">
import Search from "@/components/UI/Search/Search.vue";
import Button from "@/components/UI/Button/Button.vue";
import DistributionList from "@/components/DistributionList/DistributionList.vue";
import Empty from "@/components/Empty/Empty.vue";
import NotFound from "@/components/NotFound/NotFound.vue";
</script>

<style lang="scss" scoped>
@import "planned";
</style>