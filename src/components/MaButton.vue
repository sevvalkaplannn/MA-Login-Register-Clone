<script setup>
import { defineProps } from "vue";
import { computed } from "vue";

const props = defineProps({
  disabled: Boolean,
  intent: {
    type: String,
    validator: (val) => ["primary","ma-secondary-just-logo", "secondary"].includes(val),
  },
});

const buttonClass = computed(() => {
  const baseClass = "ma-button-default";
  if (props.intent === "primary") {
    return `${baseClass} ma-primary`;
  }
  else if (props.intent === "ma-secondary-just-logo") {
    return `${baseClass} ma-secondary-just-logo`;
  }
   else {
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
  @apply text-center text-base cursor-pointer leading-6 flex h-12 py-3 px-6 justify-center items-center gap-2 self-stretch rounded-lg font-euclid transition-colors duration-200;
}
.ma-primary {
  @apply bg-PrimaryDark max-[1024px]:w-full text-white font-medium w-[360px] hover:bg-PrimaryHover border-none;
}

.ma-secondary-just-logo{
  @apply bg-white h-[43.6px] max-[1024px]:w-full w-[112px] text-black border-BorderGray border border-solid font-semibold hover:bg-SecondaryHover;;
}

.ma-secondary-just-logo:active{
  @apply shadow-[0px_0px_0px_4px_#f2f4f7,0px_1px_2px_0px_rgba(16,24,40,0.05)];
}

.ma-primary:active {
  @apply bg-PrimaryActive;
}
.ma-secondary {
  @apply bg-white h-[43.6px] max-[1024px]:w-full w-[360px] text-black border-BorderGray border border-solid font-semibold hover:bg-SecondaryHover;
}
.ma-secondary:active {
  @apply shadow-[0px_0px_0px_4px_#f2f4f7,0px_1px_2px_0px_rgba(16,24,40,0.05)];
}
.ma-disabled {
  @apply !bg-gray-100 !text-gray-400 cursor-not-allowed;
}
</style>
