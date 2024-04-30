<template>
  <div class="selecting-condition">
    <div class="selecting-condition__block">
      <span class="selecting-condition__title">Общие</span>
      <div class="selecting-condition__list">
        <span
            @click="selectCondition(1)"
            class="selecting-condition__item"
        >
          Группа подписчиков
        </span>
        <span
            @click="selectCondition(2)"
            class="selecting-condition__item"
        >
          Наличие в шаге
        </span>
        <span
            @click="selectCondition(3)"
            class="selecting-condition__item"
        >
          Наличие метки
        </span>
      </div>
    </div>
    <div class="selecting-condition__block">
      <span class="selecting-condition__title">CRM</span>
      <div class="selecting-condition__list">
        <span
            @click="selectCondition(4)"
            class="selecting-condition__item"
        >
          Наличие в этапе воронки
        </span>
        <span
            @click="selectCondition(5)"
            class="selecting-condition__item"
        >
          Наличие тегов
        </span>
        <span
            @click="selectCondition(6)"
            class="selecting-condition__item"
        >
          Поля совпадают
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";
import {computed, ref} from "vue/dist/vue";

const emits = defineEmits(["select-condition"])

const selectedConditions = ref([])

const isSelected = computed(() => {
  const isSelectedObj: Record<number, boolean> = {}
  selectedConditions.value.forEach(id => {
    isSelectedObj[id] = true
  })
  return isSelectedObj
})
const selectCondition = (id: number) => {
  emits("select-condition", id)

  if (isSelected.value[id]) {
    const index = selectedConditions.value.indexOf(id)

    if (index > -1) {
      selectedConditions.value.splice(index, 1)
    }
  } else {
    selectedConditions.value.push(id)
  }
}
</script>

<style lang="scss" scoped>
@import "selectingCondition";
</style>