<template>
  <div class="create-distribution">
    <div class="create-distribution__wrapper">
      <div class="create-distribution__head">
        <span class="create-distribution__title">
          Выберите источник для рассылки
        </span>
        <img @click="closeCreateDistribution" src="@/assets/svg/close-icon.svg" alt="close">
      </div>
      <div class="create-distribution__content">
        <Select
            selected="Выберите источник"
            border="light"
            :select-data="source"
        />
        <div class="create-distribution__buttons">
          <Button
              text="Перейти в редактор"
              color="blue"
              @click="$router.push('/edit-distribution')"
          />
          <Button
              text="Отменить"
              color="white"
              @click="closeCreateDistribution"
          />
        </div>
      </div>
    </div>
    <div @click="closeCreateDistribution" class="create-distribution__overlay"></div>
  </div>
</template>

<script setup lang="ts">
import Select from "@/components/UI/Select/Select.vue";
import { ref } from "vue";
import Button from "@/components/UI/Button/Button.vue";

const emits = defineEmits([
  'close-create-distribution'
])

const closeCreateDistribution = () => {
  emits('close-create-distribution')
}

const source = ref([
  { name: 'ifaceup_bot', id: 0 },
  { name: 'ifaceup_bot', id: 1 },
  { name: 'ifaceup_bot', id: 2 },
  { name: 'ifaceup_bot', id: 3 },
  { name: 'ifaceup_bot', id: 4 },
])
</script>

<style lang="scss" scoped>
@import "createDistribution";
</style>