<template>
  <div class="ma-wrapper">
    <div class="ma-leftside">
      <div>
        <MaButton intent="primary">Create a free account</MaButton>
        <MaButton :class="buttonClass">
          <MaIcons name="gmaillogo" class="w-6 h-6 z-10" />
          Continue with Google
        </MaButton>
      </div>
      <div>
        <MaInput
          type="email"
          id="email"
          v-model="email"
          label="E-mail"
          placeholder="Enter your e-mail"
          :error="emailError"
          helpErrorText="Please enter a valid e-mail"
        ></MaInput>
        <MaInput
          type="password"
          id="password"
          v-model="password"
          label="Password"
          placeholder="Set a strong password"
          :error="passwordError"
          helpEmptyText="Please set a password"
          helpText="At least 8 characters, one uppercase, one lowercase, one digit and one special character "
        ></MaInput>
      </div>
    </div>
    <div class="ma-rightside">
      <div class="ma-testimonial-wrapper">
        <MaTestimonial></MaTestimonial>
      </div>
    </div>
  </div>

</template>

<script setup>
import MaIcons from "../MaIcons.vue";
import MaButton from "../components/MaButton.vue";
import MaInput from "../components/MaInput.vue";
import MaTestimonial from "../components/MaTestimonial.vue";
import { ref, watch } from "vue";

const password = ref("");
const email = ref("");
const emailError = ref("");
const passwordError = ref("");

function validateEmail(emailValue) {
  const emailPattern = /\S+@\S+\.\S+/;
  return emailPattern.test(emailValue);
}

function validatePassword(passwordValue) {
  return passwordValue.length >= 8;
}

watch(email, (newValue) => {
  if (newValue && !validateEmail(newValue)) {
    emailError.value = true;
  } else {
    emailError.value = false;
  }
});

watch(password, (newValue) => {
  if (newValue && !validatePassword(newValue)) {
    passwordError.value = true;
  } else {
    passwordError.value = false;
  }
});
</script>

<style scoped>
html{
  @apply m-0 p-0;
}
.ma-wrapper{
  @apply flex justify-between h-full w-full ;
}
.ma-rightside{
  @apply m-0  w-1/3;
}

.ma-testimonial-wrapper {
  @apply h-full min-h-[100vh];
}

.ma-button {
  @apply inline-flex items-center ;
}


</style>
