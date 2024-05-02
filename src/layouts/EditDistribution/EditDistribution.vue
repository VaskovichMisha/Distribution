<template>
  <div class="distribution__container">
    <div class="edit-distribution">
      <h2 class="edit-distribution__title">Редактирование рассылки</h2>
      <input
          class="edit-distribution__input-title"
          type="text"
          placeholder="Введите название рассылки"
          value="Новая рассылка от 02.10.2023, 12:03:49"
      >
      <div class="edit-distribution__message">
        <div class="edit-distribution__subtitle">
          <div>1</div>
          <h3>Сообщение</h3>
        </div>
        <div class="edit-distribution__textarea">
          <textarea placeholder="Введите текст сообщения"></textarea>
          <div class="edit-distribution__textarea-buttons">
            <button>
              <img src="@/assets/svg/smile.svg" alt="">
            </button>
            <button>
              <img src="@/assets/svg/text-t.svg" alt="">
            </button>
          </div>
        </div>
        <div class="edit-distribution__message-buttons">
          <button @click="openDownloadFiles">
            <img src="@/assets/svg/clip.svg" alt="">
          </button>
          <DistrButton
              @click="openAddButton"
              text="Добавить кнопку"
              color="white"
          />
<!--     **********     -->
          <DownloadFiles
              v-if="visibleDownloadFiles"
              @cancel-download-files="visibleDownloadFiles = false"
          />
          <AddButton
              v-if="visibleAddButton"
          />

        </div>
      </div>
      <div class="edit-distribution__recipients">
        <div class="edit-distribution__subtitle">
          <div>2</div>
          <h3>Получатели</h3>
        </div>
        <div class="edit-distribution__recipients-container">
          <div class="edit-distribution__recipients-setting">
            <div>
              <div class="edit-distribution__source">
                <span>Источник:</span>
                <span>FaceUpBot (@ifaceup_bot)</span>
              </div>
              <div class="edit-distribution__match">
                <span>Получатели соответствуют</span>
                <Select
                    selected="Одному из условий"
                    :select-data="condition"
                    border="light"
                />
              </div>
            </div>
            <div class="edit-distribution__recipients-block--mobile">
              <div class="edit-distribution__recipients-amount">
                <div>
                  <img src="@/assets/svg/fi-sr-user.svg" alt="">
                  <span>Получателей: 234</span>
                </div>
                <button @click="isAllRecipient = true">Посмотреть всех</button>
              </div>
              <div class="edit-distribution__recipients-avatars">
                <img v-for="i in 8" src="@/assets/image/avatar.png" alt="avatar">
              </div>
            </div>
            <div class="edit-distribution__recipients-buttons">
              <Button
                  text="Добавить условие"
                  color="light-blue"
                  @click="isSelectingCondition = !isSelectingCondition"
              >
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.5 1V10" stroke="#0188DA" stroke-width="2" stroke-linecap="round"/>
                  <path d="M10 5.5L1 5.5" stroke="#0188DA" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </Button>
              <Button
                  text="Сбросить все условия"
                  color="white"
                  @click="isResettingConditions = !isResettingConditions"
              />
              <SelectingCondition
                  v-if="isSelectingCondition"
                  @select-condition="selectCondition"
                  :is-selected="isSelected"
              />
              <ResettingConditions
                  v-if="isResettingConditions"
                  @resetting-condition="resettingCondition"
                  @cancel-condition="isResettingConditions = false"
              />
            </div>
          </div>
          <div class="edit-distribution__recipients-block">
            <div class="edit-distribution__recipients-amount">
              <div>
                <img src="@/assets/svg/fi-sr-user.svg" alt="">
                <span>Получателей: 234</span>
              </div>
              <button @click="isAllRecipient = true">Посмотреть всех</button>
            </div>
            <div class="edit-distribution__recipients-avatars">
              <img v-for="i in 12" src="@/assets/image/avatar.png" alt="avatar">
            </div>
          </div>
        </div>
        <div class="edit-distribution__recipients-conditions">
          <PresenceFunnel v-if="isSelected[1]" />
          <GroupSubscribers v-if="isSelected[2]" />
          <AvailabilityStep v-if="isSelected[3]" />
          <PresenceLabel v-if="isSelected[4]" />
          <ContainsTags v-if="isSelected[5]" />
          <MatchFields v-if="isSelected[6]" />
        </div>
      </div>
      <div class="edit-distribution__dispatch">
        <div class="edit-distribution__subtitle">
          <div>3</div>
          <h3>Отправка</h3>
        </div>
        <div class="edit-distribution__dispatch-block">
          <span>Дата рассылки</span>
          <div class="edit-distribution__dispatch-date">03.10.2023 15:22 МСК</div>
        </div>
      </div>
      <div class="edit-distribution__buttons">
        <DistrButton
            color="blue"
            text="Сохранить и закрыть"
        />
        <DistrButton
            color="white"
            text="Отменить"
        />
        <DistrButton
            color="white"
            text="Отправить тестовое сообщение"
        >
          <svg width="14" height="14" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_671_5814)">
              <path d="M9.87456 0.71582L2.16211 8.42619C2.32885 8.50745 2.51172 8.55016 2.6972 8.55112H4.01806C4.12856 8.55082 4.23457 8.59476 4.31248 8.67313L5.0283 9.38854C5.41648 9.7794 5.94446 9.99941 6.49532 9.99984C6.72276 9.99962 6.94864 9.96234 7.16408 9.88949C7.9068 9.64599 8.44702 9.00214 8.55783 8.2284L9.9649 1.54491C10.0321 1.26643 10.0001 0.973263 9.87456 0.71582Z" fill="#0188DA"/>
              <path d="M8.46692 0.032251L1.79968 1.43684C0.660481 1.59334 -0.136149 2.64373 0.0203586 3.78292C0.0821768 4.23281 0.289376 4.65018 0.610394 4.97137L1.3258 5.68678C1.404 5.76496 1.4479 5.87102 1.44782 5.9816V7.30247C1.44878 7.48794 1.49149 7.67084 1.57275 7.83756L9.28393 0.125125C9.03052 0.000590355 8.74179 -0.0322219 8.46692 0.032251Z" fill="#0188DA"/>
            </g>
            <defs>
              <clipPath id="clip0_671_5814">
                <rect width="10" height="10" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </DistrButton>
      </div>
    </div>
  </div>
  <AllRecipients
      v-if="isAllRecipient"
      @close-all-recipients="isAllRecipient = false"
  />
</template>

<script setup lang="ts">
import DistrButton from "@/components/UI/Button/Button.vue";
import PresenceFunnel from "@/components/Conditions/PresenceFunnel/PresenceFunnel.vue";
import Select from "@/components/UI/Select/Select.vue";
import Button from "@/components/UI/Button/Button.vue";
import GroupSubscribers from "@/components/Conditions/GroupSubscribers/GroupSubscribers.vue";
import AvailabilityStep from "@/components/Conditions/AvailabilityStep/AvailabilityStep.vue";
import PresenceLabel from "@/components/Conditions/PresenceLabel/PresenceLabel.vue";
import ContainsTags from "@/components/Conditions/ContainsTags/ContainsTags.vue";
import MatchFields from "@/components/Conditions/MatchFields/MatchFields.vue";
import SelectingCondition from "@/components/UI/SelectingCondition/SelectingCondition.vue";
import ResettingConditions from "@/components/UI/ResettingConditions/ResettingConditions.vue";
import AllRecipients from "@/components/Modals/AllRecipients/AllRecipients.vue";

import { ref, computed  } from "vue";
import DownloadFiles from "@/components/UI/DownloadFiles/DownloadFiles.vue";
import AddButton from "@/components/UI/AddButton/AddButton.vue";

const visibleDownloadFiles = ref(false)
const visibleAddButton = ref(false)
const isSelectingCondition = ref(false)
const isResettingConditions = ref(false)
const isAllRecipient = ref(false)
const selectedConditions = ref([])

const condition = ref([
  { name: 'Одному из условий', id: 0 },
  { name: 'Всем условиям', id: 1 },
])

const isSelected = computed(() => {
  const isSelectedObj: Record<number, boolean> = {}
  selectedConditions.value.forEach(id => {
    isSelectedObj[id] = true
  })
  return isSelectedObj
})

const selectCondition = (id: number) => {
  if (isSelected.value[id]) {
    const index = selectedConditions.value.indexOf(id)

    if (index > -1) {
      selectedConditions.value.splice(index, 1)
    }
  } else {
    selectedConditions.value.push(id)
  }
}

const resettingCondition = () => {
  selectedConditions.value = []
  isResettingConditions.value = false
  isSelectingCondition.value = false
}

const openAddButton = () => {
  visibleAddButton.value = !visibleAddButton.value
  visibleDownloadFiles.value = false
}

const openDownloadFiles = () => {
  visibleDownloadFiles.value = !visibleDownloadFiles.value
  visibleAddButton.value = false
}

</script>

<style lang="scss" scoped>
@import "editDistribution";
</style>