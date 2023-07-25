<template>
  
    <div class="ma-bg">
       <div class="ma-wrapper ">
      <div class="ma-header">
        <MaIcons name="mobileactionlogowhite" />
        <MaIcons name="linelogowhite" />
        <MaIcons name="partnerlogowhite" />
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
      </div>
     
    </div>
    
  
</template>

<script setup>
import MaIcons from "../MaIcons.vue";
import MaButton from "../components/MaButton.vue";
import MaInput from "../components/MaInput.vue";
import { RegisterFormFiels } from "@/composables/validations/registerForm";

const { email, password, handleSubmit, errors } = RegisterFormFiels();

const submit = handleSubmit((values) => {
  console.log("form submitted", values);
});
</script>

<style scoped>

.ma-bg{
    align-items: center;
    --tw-bg-opacity: 1;
    background-color: rgb(249 250 251 / var(--tw-bg-opacity));
    background-image: url(../assets/background/login.svg);
}
.ma-logo-buttons {
  @apply flex flex-row justify-center gap-3;
}
.ma-header {
  @apply absolute left-0 top-0 flex justify-start ml-7 mt-7 gap-5 align-middle items-center  max-[1024px]:hidden;
}
.ma-wrapper {
  @apply flex h-full lg:min-h-[700px] w-full justify-between ;
}

.ma-forgot-password {
  @apply w-[360px] h-8 max-[1024px]:w-full flex justify-end text-gray-400 font-euclid text-xs not-italic font-normal leading-4;
}

.ma-button {
  @apply inline-flex items-center max-[1024px]:w-full;
}

.ma-content {
  /*kaldırdım ve md:max-w-[22.5rem]*/
  box-shadow: 0px 74px 44px 0px rgba(135, 135, 135, 0.05),0px 131px 53px 0px rgba(135, 135, 135, 0.01),0px 205px 57px 0px rgba(135, 135, 135, 0);
  @apply w-full flex flex-col max-[1024px]:w-full md:min-w-[335px] max-[1024px]:px-5 justify-center items-center md:w-[30rem] bg-white rounded-2xl py-16 ;

  
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
  @apply font-euclid flex max-[1024px]:w-full mt-8 justify-center text-gray-500 leading-4 font-normal text-xs not-italic tracking-wide;
}

.ma-login-link {
  @apply font-euclid text-center max-[1024px]:w-full text-[#4478FF] text-xs not-italic leading-4 font-medium tracking-wide ml-2;
}
</style>
