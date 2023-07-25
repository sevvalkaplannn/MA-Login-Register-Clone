<template>
  <div class="ma-wrapper">
    <div class="ma-header">
      <MaIcons name="MobileActionLogo" />
      <MaIcons name="linelogo" />
      <MaIcons name="partnerlogo" />
    </div>
    <div class="ma-leftside">
      <div class="ma-content">
        <h1 class="ma-title">Let’s get started</h1>
        <p class="ma-trial">Start your 7-day free trial. Cancel any time.</p>
        <div>
          <MaButton>
            <MaIcons name="gmaillogo" />
            Continue with Google
          </MaButton>
          <div class="ma-text-sep">
            <span class="ma-sep"></span>
            <div class="ma-text-sep-content">or sign up with</div>
            <span class="ma-sep"></span>
          </div>
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
        <span data-v-72b92191="" class="ma-agreement">
          By clicking sign up button, you agree to the
          <a
            data-v-72b92191=""
            href="https://www.mobileaction.co/terms-of-service"
            target="_blank"
            >Terms of Services</a
          >
          and
          <a
            data-v-72b92191=""
            href="https://www.mobileaction.co/privacy-policy"
            target="_blank"
            >Privacy Policy</a
          ></span
        >
        <p data-v-72b92191="" class="ma-login-redirect">
          Already have an account?
          <a
            data-v-72b92191=""
            role="button"
            href="/login"
            ><span class="ma-login-link">Log in</span></a
          >
        </p>
      </div>
    </div>
    <div class="ma-rightside">
      <MaTestimonial></MaTestimonial>
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
.ma-header {
  @apply absolute left-0 top-0 flex justify-start ml-7 mt-7 gap-5 align-middle items-center  max-[1024px]:hidden;
}
.ma-wrapper {
  @apply flex h-full lg:min-h-[700px] w-full justify-between;
}
.ma-rightside {
  @apply right-0  w-[33rem] max-[1024px]:hidden;
}

.ma-testimonial-wrapper {
  @apply h-full min-h-[100vh]  w-[33rem];
}

.ma-button {
  @apply inline-flex items-center max-[1024px]:w-full;
}

.ma-leftside {
  @apply w-full flex flex-col items-center justify-center;
}
.ma-content {
  @apply w-full flex flex-col max-[1024px]:w-full max-[1024px]:px-5 md:min-w-[335px] md:max-w-[22.5rem];
}

.ma-title {
  @apply text-gray-900 max-[1024px]:w-full mb-[0.75rem] text-center font-euclid text-[32px] not-italic font-semibold leading-[48px];
}

.ma-trial {
  background: var(--success-50, #ecfdf3);
  @apply ml-auto  max-[1024px]:w-full mr-auto mb-6 h-auto max-w-max text-center px-3 py-[3px];
  @apply border-solid items-center justify-center flex   border-emerald-500 rounded-[1000px] text-emerald-500 font-euclid text-xs not-italic font-medium leading-4 text-center;
}

.ma-text-sep {
  @apply flex flex-row max-[1024px]:w-full items-center my-6;
}

.ma-text-sep-content {
  @apply mx-3 font-euclid  text-gray-400 text-xs not-italic font-medium leading-4;
}
.ma-sep {
  @apply h-[1px] flex-1 w-10;
  --tw-bg-opacity: 1;
  background-color: rgb(234 236 240 / var(--tw-bg-opacity));
}

.ma-agreement {
  @apply font-euclid mt-4 max-[1024px]:w-full mb-4 text-gray-400 leading-4 font-normal text-xs not-italic self-stretch text-center;
}

.ma-login-redirect {
  @apply font-euclid flex max-[1024px]:w-full justify-center text-gray-500 leading-4 font-normal text-xs not-italic tracking-wide;
}

.ma-login-link {
  @apply font-euclid text-center max-[1024px]:w-full text-[#4478FF] text-xs not-italic leading-4 font-medium tracking-wide ml-2;
}
</style>
