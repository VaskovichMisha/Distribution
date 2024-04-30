<template>
  <div class="resetting-condition">
    <span class="resetting-condition__title">Сбросить все заданные условия?</span>
    <div class="resetting-condition__buttons">
      <Button
          text="Да"
          color="blue"
          @click="resettingCondition"
      />
      <Button
          text="Отменить"
          color="white"
          @click="cancelCondition"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/UI/Button/Button.vue";

const emits = defineEmits([
  'resetting-condition',
  'cancel-condition',
])

const resettingCondition = () => {
    emits('resetting-condition')
}

const cancelCondition = () => {
    emits('cancel-condition')
}

</script>

<style scoped lang="scss">
@import "resettingConditions";
</style>