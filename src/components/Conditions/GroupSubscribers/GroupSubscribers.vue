<template>
  <div class="distribution-condition">
    <div class="distribution-condition__head">
      Группа подписчиков
    </div>
    <div class="distribution-condition__container">
      <div class="distribution-condition__radio-buttons">
        <Radio
            text="Подписан"
            name="radio-subscribers"
            id="radio_subscribers_1"
        />
        <Radio
            text="Не подписан"
            name="radio-subscribers"
            id="radio_subscribers_2"
        />
      </div>
      <div class="distribution-condition__selects">
        <Select
            :selectData="selectFunnel"
            selected="Выберите группу"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Radio from "@/components/UI/Radio/Radio.vue";
import Select from "@/components/UI/Select/Select.vue";
import { ref } from "vue";

const selectFunnel = ref([
  { name: 'Группа 1', id: 0 },
  { name: 'Группа 2', id: 1 },
  { name: 'Группа 3', id: 2 },
  { name: 'Группа 4', id: 3 },
  { name: 'Группа 5', id: 4 },
])
</script>

<style lang="scss" scoped>
@import "groupSubscribers";
</style>