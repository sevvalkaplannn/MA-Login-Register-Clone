<template>
  <div class="ma-bg">
    <div class="ma-wrapper">
      <div class="ma-header">
        <RouterLink to="/">
          <MaIcons name="mobileactionlogowhite" />
        </RouterLink>
        <MaIcons name="linelogowhite" />
        <a
          href="        https://www.searchads.com/
"
        >
          <MaIcons name="partnerlogowhite" />
        </a>
      </div>

      <div class="ma-content">
        <h1 class="ma-title">Welcome back!</h1>
        <div>
          <div class="ma-logo-buttons">
            <MaButton intent="ma-secondary-just-logo">
              <MaIcons name="gmaillogo" />
            </MaButton>
            <MaButton intent="ma-secondary-just-logo">
              <MaIcons name="applelogo" />
            </MaButton>
            <MaButton intent="ma-secondary-just-logo">
              <MaIcons name="linkedinlogo" />
            </MaButton>
          </div>

          <div class="ma-text-sep">
            <span class="ma-sep"></span>
            <div class="ma-text-sep-content">or continue with</div>
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
            :helpErrorText="errors.password"
          >
          </MaInput>
          <a
            class="ma-forgot-password"
            data-v-72b92191=""
            href="https://insights.mobileaction.co/recover?forwardTo=/freemium&ref=true"
            target="_blank"
            >Forgot Password?</a
          >
          <MaButton intent="primary">Log in</MaButton>
        </form>

        <p data-v-72b92191="" class="ma-login-redirect">
          Don't have an account?
          <a data-v-72b92191="" role="button" href="/register"
            ><span class="ma-login-link">Create a free account</span></a
          >
        </p>
      </div>

      <div class="ma-footer">
        <span>© MobileAction 2023</span
        ><a class="ma-button" role="button" href="mailto:info@mobileaction.co"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="mr-2 w-6 h-6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="1.5"
              d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5Z"
            ></path>
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="1.5"
              d="m17 9-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9"
            ></path></svg
          ><span>info@mobileaction.co</span></a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import MaIcons from "../MaIcons.vue";
import MaButton from "../components/MaButton.vue";
import MaInput from "../components/MaInput.vue";
import { LoginFormFiels } from "@/composables/validations/loginForm.js";

const { email, password, handleSubmit, errors } = LoginFormFiels();

const submit = handleSubmit((values) => {
  console.log("form submitted", values);
});
</script>

<style scoped>
.ma-bg {
  @apply sm:w-full sm:min-h-full items-center flex relative justify-center bg-no-repeat bg-top bg-gray-50 max-[768px]:bg-white bg-[length:100%] bg-[url(../assets/background/login.svg)] max-[768px]:bg-none;
  --tw-bg-opacity: 1;
}
.ma-logo-buttons {
  @apply flex flex-row justify-center gap-3;
}
.ma-header {
  @apply absolute left-0 top-0 flex justify-start ml-7 mt-7 gap-5 align-middle items-center  max-[1024px]:hidden;
}
.ma-wrapper {
  @apply flex lg:min-h-[700px] justify-between max-[767px]:w-full max-[767px]:h-full;
}

.ma-forgot-password {
  @apply w-[360px] h-8 max-[768px]:w-full flex justify-end text-gray-400 font-euclid text-xs not-italic font-normal leading-4;
}

.ma-forgot-password:hover {
  @apply underline-offset-8 underline text-[#4478FF];
}
.ma-button {
  @apply inline-flex items-center max-[768px]:w-full;
}

.ma-content {
  @apply w-full md:h-[36rem]  md:flex flex-col max-[768px]:w-full md:min-w-[335px] max-[768px]:px-5 justify-center items-center md:w-[30rem] bg-white rounded-2xl py-16 md:mt-16 shadow-[0px_74px_44px_0px_rgba(135,135,135,0.05),0px_131px_53px_0px_rgba(135,135,135,0.01),0px_205px_57px_0px_rgba(135,135,135,0)] max-[768px]:shadow-none;
}

.ma-title {
  @apply text-gray-900 max-[768px]:w-full mb-[0.75rem] text-center font-euclid text-[32px] not-italic font-semibold leading-[48px];
}

.ma-trial {
  background: var(--success-50, #ecfdf3);
  @apply ml-auto  max-[768px]:w-full mr-auto mb-6 h-auto max-w-max text-center px-3 py-[3px];
  @apply border-solid items-center justify-center flex   border-emerald-500 rounded-[1000px] text-emerald-500 font-euclid text-xs not-italic font-medium leading-4 text-center;
}

.ma-text-sep {
  @apply flex flex-row max-[768px]:w-full items-center my-6;
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
  @apply font-euclid mt-4 max-[768px]:w-full mb-4 text-gray-400 leading-4 font-normal text-xs not-italic self-stretch text-center;
}

.ma-login-redirect {
  @apply font-euclid flex max-[768px]:w-full mt-8 justify-center text-gray-500 leading-4 font-normal text-xs not-italic tracking-wide;
}

.ma-login-link {
  @apply font-euclid text-center max-[768px]:w-full text-[#4478FF] text-xs not-italic leading-4 font-medium tracking-wide ml-2 hover:underline underline-offset-8;
}

.ma-footer {
  @apply absolute left-0 bottom-0 w-full flex-row content-between p-8 flex text-gray-500 font-euclid text-sm font-normal leading-5 justify-between max-[768px]:hidden;
}
</style>
