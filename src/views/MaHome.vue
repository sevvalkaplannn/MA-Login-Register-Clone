<template>
  <div class="ma-page">
    <div class="ma-home-banner">
      <div class="ma-infos">
        <div class="ma-infos-wrapper">
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
    </div>
    <div class="ma-header">
      <div class="ma-header-logo-wrapper">
        <RouterLink class="ma-router-logo" to="/">
          <MaIcons name="MobileActionLogo" />
        </RouterLink>
      </div>

      <div class="ma-dropdown">
        <nav id="nav">
          <ul class="">
            <li v-for="item in items" :key="item.name">
              <a v-if="!item.children" :href="item.url">{{ item.name }}</a>
              <span
                v-else
                @mouseover="mouseover(item.name)"
                @mouseleave="mouseleave(item.name)"
              >
                
                  {{ item.name }}
                  <span>
                    <MaIcons name="dropdownlogo" />
                  </span>
                

                <ul class="dropdown" :class="{ isOpen: dropdownOpen[item.name] }">
                  <li v-for="child in item.children" :key="child.name">
                    <a :href="child.url">{{ child.name }}</a>
                  </li>
                </ul>
              </span>
            </li>
          </ul>
        </nav>
      </div>

      <div class="ma-buttons-wrapper">
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

import { ref } from "vue";

const dropdownOpen = ref({});
const items = [
  {
    name: "Solutions",
    children: [
      {
        url: "https://www.mobileaction.co/solutions/aso-mobile-user-acquisition/",
        name: "ASO, User Acquisition & Growth",
      },
      {
        url: "https://www.mobileaction.co/solutions/mobile-app-publishing-management/",
        name: "App Publishing & Product Management",
      },
      {
        url: "https://www.mobileaction.co/solutions/mobile-app-marketing-advertising/",
        name: "Marketing, Advertising & Research",
      },
    ],
  },
  {
    name: "Products",
    children: [
      {
        url: "#service1",
        name: "Service1",
      },
      {
        url: "#service2",
        name: "Service2",
      },
      {
        url: "#service3",
        name: "Service3",
      },
    ],
  },
  {
    name: "Resources",
    children: [
      {
        url:
          "https://marketing.mobileaction.co/the-app-marketers-handbook-for-ios-15-user-acquisition?hsLang=en#download-report",
        name: "iOS 15 User Acquisition Guide",
      },
      {
        url: "#service2",
        name: "Mobile User Acquisition Guide",
      },
      {
        url: "#service3",
        name: "Custom Product Pages Guide",
      },
      {
        url: "#service3",
        name: "Mobile Ad Trends 2021 Report",
      },
      {
        url: "#service3",
        name: "Growth University",
      },
      {
        url: "#service3",
        name: "Webinars",
      },
      {
        url: "#service3",
        name: "Success Stories",
      },
      {
        url: "#service3",
        name: "API Documentation",
      },
      {
        url: "#service3",
        name: "App Store Optimization",
      },
      {
        url: "#service3",
        name: "Help Center",
      },
      {
        url: "#service3",
        name: "Academy",
      },
      {
        url: "#service3",
        name: "E-Books",
      },
      {
        url: "#service3",
        name: "Glossary",
      },
      {
        url: "#service3",
        name: "Top Charts",
      },
      {
        url: "#service3",
        name: "What's New",
      },
      {
        url: "#service3",
        name: "Security Information",
      },
    ],
  },
  {
    name: "Free Tools",
    children: [
      {
        url: "#service1",
        name: "Apple Search Ads Audit",
      },
      {
        url: "#service2",
        name: "Apple Search Ads Performance Grader",
      },
      {
        url: "#service3",
        name: "App Report",
      },
      {
        url: "#service3",
        name: "Ad Library",
      },
      {
        url: "#service3",
        name: "AI Keyword Generator",
      },
    ],
  },
  {
    url: "https://www.mobileaction.co/blog/",
    name: "Blog",
  },
  {
    url: "https://www.mobileaction.co/pricing/",
    name: "Pricing",
  },
];

function mouseover(itemName) {
  dropdownOpen.value[itemName] = true;
}

function mouseleave(itemName) {
  dropdownOpen.value[itemName] = false;
}
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
  @apply flex;
}
.ma-infos-wrapper {
  @apply max-w-[720px] min-w-[420px] gap-5 flex;
}
.ma-header {
  @apply h-[70px] justify-between flex items-center fixed z-[100] shadow-[0_1px_5px_rgba(0,0,0,0.1)] w-screen left-0 top-[1.8rem] bg-white;
}

.ma-header-logo-wrapper {
  @apply flex ml-20;
}

.ma-router-logo {
  @apply flex justify-center align-middle content-center flex-wrap;
}

.ma-button {
  @apply bg-[#de2442] text-white border-[#de2442];
}

.ma-button:hover {
  @apply text-white bg-[#f70202] border-[#de2342];
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.ma-buttons-wrapper {
  @apply flex min-w-[460px] gap-4;
}

.ma-row {
  @apply flex align-middle;
}
#nav > ul {
  @apply flex list-none m-0 p-0;
}
#nav > ul > li > a {
  @apply block h-auto text-[1.1rem] text-black hover:underline   p-5;
}
#nav > ul > li > span {
  @apply relative block h-auto cursor-pointer text-[1.1rem] text-black p-5;
}

#nav > ul > li > span {
@apply hover:underline decoration-red-600 decoration-2  underline-offset-4;
}
.dropdown {
  @apply absolute hidden list-none bg-[white] p-0 left-0 top-full;
}
.dropdown li {
  @apply w-[250px];
}
.dropdown li a {
  @apply block text-[black] text-base no-underline hover:underline p-2.5;
}
.isOpen {
  @apply block;
}
</style>
