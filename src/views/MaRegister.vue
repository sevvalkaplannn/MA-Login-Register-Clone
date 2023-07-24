<template>
  <div class="ma-wrapper">
    <div class="ma-leftside">
      <div>
        <MaButton :class="buttonClass">
          <MaIcons name="gmaillogo" class="w-6 h-6 z-10" />
          Continue with Google
        </MaButton>
      </div>
      <form @submit.prevent="submit">
        <MaInput
          type="email"
          id="email"
          v-model="email"
          label="E-mail"
          placeholder="Enter your e-mail"
          :error="errors.email"
          :helpErrorText="errors.email"
        ></MaInput>
        <MaInput
          type="password"
          id="password"
          v-model="password"
          label="Password"
          placeholder="Set a strong password"
          :error="errors.password"
          helpText="At least 8 characters, one uppercase, one lowercase, one digit and one special character "
          :helpErrorText="errors.password"
        ></MaInput>
        <MaButton intent="primary">Create a free account</MaButton>
      </form>
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
import { RegisterFormFiels } from "@/composables/validations/registerForm";

const { email, password, handleSubmit, errors } = RegisterFormFiels();

const submit = handleSubmit((values) => {
  console.log("form submitted", values);
});
</script>

<style scoped>
html {
  @apply m-0 p-0;
}
.ma-wrapper {
  @apply flex justify-between h-full w-full;
}
.ma-rightside {
  @apply m-0  w-[33rem] max-[1024px]:hidden;
}

.ma-testimonial-wrapper {
  @apply h-full min-h-[100vh];
}

.ma-button {
  @apply inline-flex items-center;
}
</style>
