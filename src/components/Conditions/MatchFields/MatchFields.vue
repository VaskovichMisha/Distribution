<template>
  <div class="distribution-condition">
    <div class="distribution-condition__head">
      Поля совпадают
    </div>
    <div class="distribution-condition__container">
      <div class="distribution-condition__radio-buttons">
        <Radio
            text="Общие поля"
            name="radio-fields"
            id="radio_fields_1"
            @radio-change="radioChange"
        />
        <Radio
            text="Поля воронки"
            name="radio-fields"
            id="radio_fields_2"
            @radio-change="radioChange"
        />
      </div>
      <div class="distribution-condition__block">
        <Select
            :selectData="selectMatch"
            :selected="selectMatch[0].name"
        />
        <div class="distribution-condition__selects">
          <Select
              v-if="openRadio === 2"
              :selectData="selectFunnel"
              selected="Выберите воронку"
          />
          <Select
              :selectData="selectFields"
              selected="Выберите поле"
          />
          <Select
              v-if="openRadio === 1"
              :selectData="selectVariable"
              selected="Переменная"
          />
        </div>
        <Select
            :selectData="selectVariable"
            selected="Выберите переменную"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Radio from "@/components/UI/Radio/Radio.vue";
import Select from "@/components/UI/Select/Select.vue";
import { ref } from "vue";

const selectMatch = ref([
  { name: 'Поле соответствует значению', id: 0 },
  { name: 'Поле не соответствует значению', id: 1 },
  { name: 'Поле содержит значение', id: 2 },
  { name: 'Поле не содержит значение', id: 3 },
  { name: 'Поле соответствует переменной', id: 4 },
  { name: 'Поле не соответствует переменной', id: 5 },
])

const selectFields = ref([
  { name: 'Поле 1', id: 0 },
  { name: 'Поле 2', id: 1 },
  { name: 'Поле 3', id: 2 },
  { name: 'Поле 4', id: 3 },
  { name: 'Поле 5', id: 4 },
])

const selectVariable = ref([
  { name: 'Переменная 1', id: 0 },
  { name: 'Переменная 2', id: 1 },
  { name: 'Переменная 3', id: 2 },
  { name: 'Переменная 4', id: 3 },
  { name: 'Переменная 5', id: 4 },
])

const selectFunnel = ref([
  { name: 'Воронка 1', id: 0 },
  { name: 'Воронка 2', id: 1 },
  { name: 'Воронка 3', id: 2 },
  { name: 'Воронка 4', id: 3 },
  { name: 'Воронка 5', id: 4 },
])

let openRadio = ref(1)

const radioChange = (value: String) => {
  if(value === 'radio_fields_1') {
    openRadio.value = 1
  } else {
    openRadio.value = 2
  }
}
</script>

<style lang="scss" scoped>
@import "matchFields";
</style>