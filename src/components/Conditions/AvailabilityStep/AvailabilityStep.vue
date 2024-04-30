<template>
  <div class="distribution-condition">
    <div class="distribution-condition__head">
      Наличие в шаге
    </div>
    <div class="distribution-condition__container">
      <div class="distribution-condition__radio-buttons">
        <Radio
            text="Содержится"
            name="radio-bot"
            id="radio_bot_1"
        />
        <Radio
            text="Не содержится"
            name="radio-bot"
            id="radio_bot_2"
        />
      </div>
      <div class="distribution-condition__selects">
        <Select
            :selectData="selectBot"
            selected="Выберите бот"
        />
        <Select
            :selectData="selectStep"
            selected="Выберите шаг"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Radio from "@/components/UI/Radio/Radio.vue";
import Select from "@/components/UI/Select/Select.vue";
import { ref } from "vue";

const selectBot = ref([
  { name: 'Бот 1', id: 0 },
  { name: 'Бот 2', id: 1 },
  { name: 'Бот 3', id: 2 },
  { name: 'Бот 4', id: 3 },
  { name: 'Бот 5', id: 4 },
])

const selectStep = ref([
  { name: 'Шаг 1', id: 0 },
  { name: 'Шаг 2', id: 1 },
  { name: 'Шаг 3', id: 2 },
  { name: 'Шаг 4', id: 3 },
  { name: 'Шаг 5', id: 4 },
])
</script>

<style lang="scss" scoped>
@import "availabilityStep";
</style>