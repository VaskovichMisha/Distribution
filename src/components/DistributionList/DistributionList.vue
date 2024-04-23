<template>
  <div class="distribution-list">
    <div class="distribution-list__head">
      <div>Название</div>
      <div>Источник</div>
      <div>Cтатистика</div>
    </div>
    <div class="distribution-list__container">
      <DistributionItem
          v-for="item in distributionList"
          :key="item.id"
          :item="item"
      />
    </div>
  </div>
</template>

<script>
import DistributionItem from "@/components/DistributionItem/DistributionItem.vue";

export default {
  data() {
    return {
      distributionList: [
        { title: 'Новая рассылка от 02.10.2023, 12:03:49', id: 0 },
        { title: 'Лид магнит для новых клиентов', id: 1 },
      ]
    }
  },
  components: {
    DistributionItem,
  }
}
</script>

<style lang="scss" scoped>
@import "distributionList";
</style>