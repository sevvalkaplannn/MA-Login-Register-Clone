<template>
  <div :class="classNames">
    <label class="ma-label" v-if="label" :for="$attrs.id">{{ label }}</label>
    <input :id="$attrs.id" :type="type" :placeholder="placeholder" v-model="inputValue" />
    <small class="ma-helpErrorText" v-if="shouldShowHelpErrorText">
      {{ helpErrorText }}
    </small>
    <small class="ma-helptext" v-else-if="helpText">
      {{ helpText }}
    </small>
  </div>
</template>

<script setup>
import { computed, defineProps, defineEmits } from "vue";

const props = defineProps([
  "type",
  "label",
  "placeholder",
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

const shouldShowHelpErrorText = computed(() => {
  return props.error;
});
</script>

<style scoped>
input::placeholder {
  @apply flex-1 text-gray-400 font-euclid text-sm not-italic font-normal leading-5;
}

input {
  @apply flex w-[360px] max-[1024px]:w-full h-[46.4px] pt-3.5 pb-3.5 pl-3 mb-[1.5rem] items-center self-stretch rounded-lg border border-solid border-gray-300 bg-white text-sm font-euclid not-italic font-medium leading-5 flex-1 outline-none;
}

input:active {
  @apply bg-gray-200 border-solid outline-2;
}
input:focus {
  @apply border-blue-400 border-solid outline-2 transition-colors duration-200;
}
.ma-label {
  @apply text-gray-500 font-euclid text-sm not-italic font-medium leading-5;
}

.ma-helptext {
  @apply w-[360px] h-8 max-[1024px]:w-full mt-[-1rem] mb-6 self-stretch text-gray-400 font-euclid text-xs not-italic font-normal leading-4;
}

.ma-helpErrorText {
  @apply w-80 h-8 self-stretch max-[1024px]:w-full mt-[-1rem] text-red-500 font-euclid text-xs not-italic font-normal leading-4;
}

.ma-input-wrapper {
  @apply grid max-[1024px]:w-full;
}

.has-error input {
  @apply border border-solid  border-red-500;
}

.error-alert {
  @apply text-red-500 font-euclid text-sm not-italic font-normal leading-5 mt-1;
}
</style>
