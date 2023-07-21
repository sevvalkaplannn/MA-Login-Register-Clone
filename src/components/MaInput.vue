<template>
    <label class="ma-label" v-if="label" :for="inputId">{{ label }}</label>
    <input :type="type" :id="inputId" :placeholder="placeholder" v-model="value" @input="$emit('update:modelValue', $event.target.value)" />
    <small class="ma-helptext" v-if="helpText">{{ helpText }}</small>
</template>

<script setup>
import { ref, defineProps } from "vue";

defineProps(['type', 'label', 'placeholder', 'helpText']);

const value = ref("");
</script>

<style scoped>

input::placeholder{
@apply flex-1 text-gray-400 font-euclid text-sm not-italic font-normal leading-5;
}

input{
@apply flex pt-3.5 pb-3.5 pr-60 pl-3 items-center self-stretch rounded-lg border border-gray-300 bg-white;
}

.ma-label{
@apply text-gray-500 font-euclid text-sm not-italic font-medium leading-5
}
.ma-helptext{
@apply self-stretch text-gray-400 font-euclid text-xs not-italic font-normal leading-4
}
</style>

