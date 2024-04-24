<template>
  <div class="distribution-select">
    <div
        @click="selectOpen = !selectOpen"
        class="distribution-select__selected"
    >
      {{ selectedChanged ? selectedChanged : selected }}
      <img
          :class="{ 'rotate-180': selectOpen }"
          src="@/assets/svg/arrow-down.svg"
          alt="arrow down"
      >
    </div>
    <div class="distribution-select__list" v-if="selectOpen">
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