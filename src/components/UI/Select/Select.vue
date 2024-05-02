<template>
  <div class="distribution-select">
    <div
        @click="selectOpen = !selectOpen"
        class="distribution-select__selected"
        :class="border"
    >
      {{ selectedChanged ? selectedChanged : selected }}
      <img
          :class="{ 'rotate-180': selectOpen }"
          src="@/assets/svg/arrow-down.svg"
          alt="arrow down"
      >
    </div>
    <div
        v-if="selectOpen"
        class="distribution-select__list"
        :class="border"
    >
      <span
          v-for="item in props.selectData"
          @click="changeSelected(item)"
          class="distribution-select__item"
      >
        {{ item.name }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps({
  selectData: Array,
  selected: String,
  border: String,
})

const selectOpen = ref(false)
const selectedChanged = ref('')

const changeSelected = (item: Object) => {
  selectOpen.value = false
  selectedChanged.value = item.name
}

</script>

<style lang="scss" scoped>
@import "select";
</style>