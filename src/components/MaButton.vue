<script setup>
import { defineProps } from "vue";
import { computed } from "vue";

const props = defineProps({
  disabled: Boolean,
  intent: {
    type: String,
    validator: (val)=> ["primary","secondary"].includes(val),
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
    <slot>
    </slot>
  </button>
</template>

<style>
.ma-button-default{
  @apply text-center text-base   leading-6 w-80 flex py-3 px-6 justify-center items-center gap-2 self-stretch rounded-lg font-euclid;
}
.ma-primary{
  @apply bg-PrimaryDark text-white font-medium hover:bg-PrimaryHover ;
}
.ma-secondary{
  @apply bg-white text-black border-BorderGray font-semibold hover:bg-SecondaryHover ;
}
.ma-disabled{
  @apply !bg-gray-100 !text-gray-400 cursor-not-allowed;
}
</style>
