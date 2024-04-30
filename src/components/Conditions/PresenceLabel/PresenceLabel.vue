<template>
  <div class="distribution-condition">
    <div class="distribution-condition__head">
      Наличие метки
    </div>
    <div class="distribution-condition__container">
      <div class="distribution-condition__selects">
        <Select
            :selectData="selectLabel"
            :selected="selectLabel[0].name"
        />
        <Select
            :selectData="selectVariable"
            selected="Выберите переменную"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Select from "@/components/UI/Select/Select.vue";
import { ref } from "vue";

const selectLabel = ref([
  { name: 'Имеет метку', id: 0 },
  { name: 'Не имеет метку', id: 1 },
  { name: 'Имеет любую метку', id: 2 },
  { name: 'Без меток', id: 3 },
])

const selectVariable = ref([
  { name: 'Переменная 1', id: 0 },
  { name: 'Переменная 2', id: 1 },
  { name: 'Переменная 3', id: 2 },
  { name: 'Переменная 4', id: 3 },
  { name: 'Переменная 5', id: 4 },
])
</script>

<style lang="scss" scoped>
@import "presenceLabel";
</style>