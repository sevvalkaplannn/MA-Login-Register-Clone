<template>
  <div>
    <MaButton intent="primary">Create a free account</MaButton>
    <MaButton :class="buttonClass">
        <MaIcons name="gmaillogo" class="w-6 h-6 z-10" />
        Continue with Google
      </MaButton>
  </div>
  <div>
    <MaInput type="email" v-model="email" label="E-mail" placeholder="Enter your e-mail"></MaInput>
    <MaInput type="password" v-model="password" label="Password" placeholder="Set a strong password" helpText="At least 8 characters, one uppercase, one lowercase, one digit and one special character "></MaInput>
  </div>
</template>

<script setup>
import MaIcons from "../MaIcons.vue";
import MaButton from "../components/MaButton.vue";
import MaInput from "../components/MaInput.vue";
import { ref } from "vue";

const password = ref('');
const email = ref('');
</script>

<style scoped>
.ma-button {
  @apply inline-flex items-center;
}


</style>
