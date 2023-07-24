<template>
  <div :class="classNames">
    <label class="ma-label" v-if="label" :for="$attrs.id">{{ label }}</label>
    <input :id="$attrs.id" :type="type" :placeholder="placeholder" v-model="inputValue" />
    <small class="ma-helptext" :style="{ color: helpTextColor }" v-if="helpText">{{
      helpEmptyText
    }}</small>
    <small
      class="ma-helpErrorText"
      :style="{ color: helpTextColor }"
      v-else-if="shouldShowHelpErrorText"
      >{{ helpErrorText }}</small
    >
  </div>
</template>

<script setup>
import { computed, defineProps, defineEmits } from "vue";

const props = defineProps([
  "type",
  "label",
  "placeholder",
  "helpEmptyText",
  "helpErrorText",
  "helpText",
  "modelValue",
  "error",
]);
const emits = defineEmits(["update:modelValue"]);
defineOptions({
  inheritAttrs: false,
});

const inputValue = computed({
  get() {
    //console.log(props.modelValue);
    return props.modelValue;
  },
  set(data) {
    //console.log(data);
    emits("update:modelValue", data);
  },
});

const classNames = computed(() => [
  "ma-input-wrapper",
  {
    "has-error": props.error,
  },
]);
const helpTextColor = computed(() => {
  return props.error || inputValue.value.trim() === "" ? "red" : "initial";
});

const shouldShowHelpErrorText = computed(() => {
  return props.error;
});

const helpEmptyText = computed(() => {
  return inputValue.value.trim() === "" ? props.helpEmptyText : props.helpText;
});
</script>

<style scoped>
input::placeholder {
  @apply flex-1 text-gray-400 font-euclid text-sm not-italic font-normal leading-5;
}

input {
  @apply flex w-[360px] pt-3.5 pb-3.5 pl-3 items-center self-stretch rounded-lg border border-solid border-gray-300 bg-white text-sm font-euclid not-italic font-medium leading-5 flex-1;
}

input:active {
  @apply bg-gray-200 border-solid outline-2;
}

.ma-label {
  @apply text-gray-500 font-euclid text-sm not-italic font-medium leading-5;
}
.ma-helptext {
  @apply w-[360px] h-8 self-stretch text-gray-400 font-euclid text-xs not-italic font-normal leading-4;
}

.ma-helpErrorText{
  @apply w-80 h-8 self-stretch text-gray-400 font-euclid text-xs not-italic font-normal leading-4;
}
.ma-input-wrapper {
  @apply grid w-80;
}

.has-error input {
  @apply border border-solid border-red-500;
}

.error-alert {
  @apply text-red-500 font-euclid text-sm not-italic font-normal leading-5 mt-1;
}
</style>
