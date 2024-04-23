<template>
  <div class="distribution-radio">
    <input type="radio" :name="props.name" :id="props.id">
    <label :for="props.id">{{ props.text }}</label>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps({
  text: String,
  name: String,
  id: String,
})

</script>

<style lang="scss" scoped>
@import "distrRadio";
</style>