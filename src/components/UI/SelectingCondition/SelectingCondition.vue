<template>
  <div class="selecting-condition">
    <div class="selecting-condition__block">
      <span class="selecting-condition__title">Общие</span>
      <div class="selecting-condition__list">
        <span
            @click="selectCondition(1)"
            class="selecting-condition__item"
            :class="{ active: props.isSelected?.[1] }"
        >
          Группа подписчиков
        </span>
        <span
            @click="selectCondition(2)"
            class="selecting-condition__item"
            :class="{ active: props.isSelected?.[2] }"
        >
          Наличие в шаге
        </span>
        <span
            @click="selectCondition(3)"
            class="selecting-condition__item"
            :class="{ active: props.isSelected?.[3] }"
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
            :class="{ active: props.isSelected?.[4] }"
        >
          Наличие в этапе воронки
        </span>
        <span
            @click="selectCondition(5)"
            class="selecting-condition__item"
            :class="{ active: props.isSelected?.[5] }"
        >
          Наличие тегов
        </span>
        <span
            @click="selectCondition(6)"
            class="selecting-condition__item"
            :class="{ active: props.isSelected?.[6] }"
        >
          Поля совпадают
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";

const props = defineProps({
  isSelected: Object,
})

const emits = defineEmits(["select-condition"])

const selectCondition = (id: number) => {
  emits("select-condition", id)
}
</script>

<style lang="scss" scoped>
@import "selectingCondition";
</style>