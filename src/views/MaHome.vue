<template>
  <div class="ma-page">
    <div class="ma-home-banner">
      <div class="ma-infos">
        <a href="https://www.mobileaction.co/contact-us/" class="">Contact</a>
        <hr class="ma-divider-span" />
        <RouterLink to="/login" class="font-bold"> Login </RouterLink>
        <hr class="ma-divider-span" />
        <a
          href="https://searchads.com/?__hstc=212712200.c711629e081c1750ce8d4392ba12b1c6.1683644286291.1689761584422.1690370044196.8&amp;__hssc=212712200.1.1690370044196&amp;__hsfp=147110142"
          target="_blank"
          rel="noopener"
          class="pr-1"
        >
          Go to <b>SearchAds</b></a
        >
      </div>
    </div>
    <div class="ma-header">
      <RouterLink class="ma-logo" to="/">
        <MaIcons name="MobileActionLogo" />
      </RouterLink>
      <div class="ma-buttons-together">
        <MaButton intent="header-primary" class="">Schedule a demo</MaButton>
        <MaButton intent="header-primary" class="ma-button">
          <RouterLink to="/register"> Sign up free </RouterLink>
        </MaButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import MaIcons from "../MaIcons.vue";
import MaButton from "../components/MaButton.vue";
</script>

<style scoped>
.ma-page {
  @apply flex justify-around w-full h-full;
}
.ma-home-banner {
  @apply fixed h-[1.8rem] w-full z-[100] left-0 top-0 flex flex-row-reverse items-center p-0 text-white;
  background: #000f2e;
}

.ma-divider-span {
  @apply h-[12px] w-[18px]  text-white rotate-90 mt-[7px] font-bold;
}

.ma-infos {
  @apply flex gap-5;
}

.ma-header {
  @apply h-[70px] flex items-center fixed z-[100] shadow-[0_1px_5px_rgba(0,0,0,0.1)] w-screen left-0 top-[1.8rem] bg-white;
}

.ma-logo {
  @apply h-[22px];
}

.ma-button {
  @apply bg-[#de2442] text-white border-[#de2442];
}

.ma-buttons-together {
  @apply flex w-full justify-end gap-4;
}
</style>
