<template>
  <div class="distribution-radio">
    <input
        type="radio"
        :name="props.name"
        :id="props.id"
        v-model="radio"
        @change="changeRadio"
    >
    <label :for="props.id">{{ props.text }}</label>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps({
  text: String,
  name: String,
  id: String,
})

const radio = ref(null)

const emits = defineEmits(["radio-change"])
const changeRadio = () => {
  emits("radio-change", props.id)
}

</script>

<style lang="scss" scoped>
@import "radio";
</style>