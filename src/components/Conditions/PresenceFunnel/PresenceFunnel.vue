<template>
  <div class="distribution-condition">
    <div class="distribution-condition__head">
      Наличие в этапе воронки
    </div>
    <div class="distribution-condition__container">
      <div class="distribution-condition__radio-buttons">
        <Radio
            text="Содержится"
            name="radio"
            id="radio_1"
        />
        <Radio
            text="Не содержится"
            name="radio"
            id="radio_2"
        />
      </div>
      <div class="distribution-condition__selects">
        <Select
            :selectData="selectFunnel"
            selected="Выберите воронку"
        />
        <Select
            :selectData="selectStage"
            selected="Выберите эпап"
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
  { name: 'Воронка 1', id: 0 },
  { name: 'Воронка 2', id: 1 },
  { name: 'Воронка 3', id: 2 },
  { name: 'Воронка 4', id: 3 },
  { name: 'Воронка 5', id: 4 },
])

const selectStage = ref([
  { name: 'Этап 1', id: 0 },
  { name: 'Этап 2', id: 1 },
  { name: 'Этап 3', id: 2 },
  { name: 'Этап 4', id: 3 },
  { name: 'Этап 5', id: 4 },
])
</script>

<style lang="scss" scoped>
@import "presenceFunnel";
</style>