<template>
  <div class="add-button">
    <div class="add-button__head">
      Добавить кнопку
    </div>
    <div class="add-button__container">
      <div class="add-button__radio-buttons">
        <Radio
            text="Переход к шагу"
            name="radio-bot"
            id="radio_bot_1"
        />
        <Radio
            text="Внешняя ссылка"
            name="radio-bot"
            id="radio_bot_2"
        />
      </div>
      <div class="add-button__data">
        <Input
            type="text"
            placeholder="Введите название кнопки"
        />
        <Select
            :selectData="selectStep"
            selected="Выберите шаг"
        />
      </div>
    </div>
    <div class="add-button__buttons">
      <Button
          text="Дабавить"
          color="blue"
      />
      <Button
          text="Отменить"
          color="white"
          @click="cancelAddButton"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/UI/Button/Button.vue";
import Select from "@/components/UI/Select/Select.vue";
import Radio from "@/components/UI/Radio/Radio.vue";

import { ref } from "vue";
import Input from "@/components/UI/Input/Input.vue";

const selectStep = ref([
  { name: 'Шаг 1', id: 0 },
  { name: 'Шаг 2', id: 1 },
  { name: 'Шаг 3', id: 2 },
  { name: 'Шаг 4', id: 3 },
  { name: 'Шаг 5', id: 4 },
])

const emits = defineEmits([
  'cancel-add-button',
])

const cancelAddButton = () => {
  emits('cancel-add-button')
}

</script>

<style lang="scss" scoped>
@import "addButton";
</style>