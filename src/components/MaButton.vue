<script setup>
import { defineProps } from "vue";
import { computed } from "vue";

const props = defineProps({
  disabled: Boolean,
  intent: {
    type: String,
    validator: (val) => ["primary", "secondary"].includes(val),
  },
});

const buttonClass = computed(() => {
  const baseClass = "ma-button-default";
  if (props.intent === "primary") {
    return `${baseClass} ma-primary`;
  } else {
    return `${baseClass} ma-secondary`;
  }
});
</script>

<template>
  <button :class="buttonClass">
    <slot> </slot>
  </button>
</template>

<style>
.ma-button-default {
  @apply text-center text-base cursor-pointer leading-6 w-[360px] flex h-12 py-3 px-6 justify-center items-center gap-2 self-stretch rounded-lg font-euclid;
}
.ma-primary {
  @apply bg-PrimaryDark text-white font-medium hover:bg-PrimaryHover border-none h-4/5;
}

.ma-primary:active {
  @apply bg-PrimaryActive;
}
.ma-secondary {
  @apply bg-white text-black border-BorderGray border border-solid font-semibold hover:bg-SecondaryHover;
}
.ma-secondary:active {
  box-shadow: 0px 0px 0px 4px #f2f4f7, 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
}
.ma-disabled {
  @apply !bg-gray-100 !text-gray-400 cursor-not-allowed;
}
</style>
