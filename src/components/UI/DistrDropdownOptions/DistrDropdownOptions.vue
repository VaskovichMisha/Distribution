<template>
  <div class="d-dropdown-options">
    <button
        class="d-dropdown-options__button"
        :class="{ 'open-dropdown': openDropdown }"
        @click="toggleDropdown"
    >
      <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.2803 5.8623H4.16787C3.77043 5.8623 3.44824 6.17107 3.44824 6.55196C3.44824 6.93285 3.77043 7.24162 4.16787 7.24162H19.2803C19.6778 7.24162 20 6.93285 20 6.55196C20 6.17107 19.6778 5.8623 19.2803 5.8623Z" fill="#999999"/>
        <path d="M4.16787 1.72404H19.2803C19.6778 1.72404 20 1.41527 20 1.03438C20 0.653493 19.6778 0.344727 19.2803 0.344727H4.16787C3.77043 0.344727 3.44824 0.653493 3.44824 1.03438C3.44824 1.41527 3.77043 1.72404 4.16787 1.72404Z" fill="#999999"/>
        <path d="M19.2803 11.3794H4.16787C3.77043 11.3794 3.44824 11.6882 3.44824 12.0691C3.44824 12.4499 3.77043 12.7587 4.16787 12.7587H19.2803C19.6778 12.7587 20 12.4499 20 12.0691C20 11.6882 19.6778 11.3794 19.2803 11.3794Z" fill="#999999"/>
        <ellipse cx="1.03448" cy="1.03448" rx="1.03448" ry="1.03448" fill="#999999"/>
        <ellipse cx="1.03448" cy="6.55157" rx="1.03448" ry="1.03448" fill="#999999"/>
        <ellipse cx="1.03448" cy="12.0692" rx="1.03448" ry="1.03448" fill="#999999"/>
      </svg>
    </button>
    <div v-if="openDropdown" class="d-dropdown-options__list" ref="dropdownList">
      <button class="d-dropdown-options__item">Редактировать</button>
      <button class="d-dropdown-options__item">Копировать</button>
      <button class="d-dropdown-options__item">Удалить</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"

const openDropdown = ref(false)

const toggleDropdown = () => {
  openDropdown.value = !openDropdown.value
}

</script>

<style lang="scss" scoped>
@import "distrDropdownOptions";
</style>