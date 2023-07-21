<template>
    <div :class="classNames">
        <label class="ma-label" v-if="label" :for="$attrs.id">{{ label }}</label>
        <input :id="$attrs.id" :type="type" :placeholder="placeholder" v-model="inputValue" />
        <small class="ma-helptext" v-if="helpText">{{ helpText }}</small>
    </div>
</template>

<script setup>
import { computed, defineProps } from "vue";

const props = defineProps(['type', 'label', 'placeholder', 'helpText', 'modelValue', 'hasError', 'errorMessage']);
const emits = defineEmits(['update:modelValue']);
defineOptions({
  inheritAttrs: false
});

const inputValue = computed({
    get(){
        console.log(props.modelValue);
        return props.modelValue;
    },
    set(data){
        console.log(data);
        emits("update:modelValue", data);
    }
});

const classNames = computed(() => [
    'ma-input-wrapper',
    {
        'has-error': props?.hasError
    }
]);

</script>

<style scoped>

input::placeholder{
@apply flex-1 text-gray-400 font-euclid text-sm not-italic font-normal leading-5;
}

input{
@apply flex pt-3.5 pb-3.5 pr-60 pl-3 items-center self-stretch rounded-lg border border-solid border-gray-300 bg-white;
}

.ma-label{
@apply text-gray-500 font-euclid text-sm not-italic font-medium leading-5
}
.ma-helptext{
@apply self-stretch text-gray-400 font-euclid text-xs not-italic font-normal leading-4
}
</style>

