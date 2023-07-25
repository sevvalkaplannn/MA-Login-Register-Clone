<template>
  <div class="ma-testimonial-wrapper">
    <div class="ma-block-quota">
      <MaIcons name="mark" class="ma-quota-symbol" />
      <p class="ma-quota">
        Using MobileAction, we helped one of Europe’s largest fintechs grow their app
        downloads by <span class="ma-vector"> 1800% </span>in just 9 months and search
        rank above the fold on more than a thousand keywords.
      </p>
      <div class="ma-avatar">
        <img src="../assets/background/avatar.png" />
      </div>
      <h1 class="ma-quota-author-name">David Prentell</h1>
      <h3 class="ma-quota-author-profession">Growth Partner at Grafikwerket</h3>
      <div class="ma-avatar">
        <img src="../assets/background/grafikwerket.png" />
      </div>
    </div>
    <div class="ma-trusted-footer">
      <div class="ma-trusted-by-header">
        <span class="ma-sep"></span>
        <div class="ma-trusted-by">Trusted by</div>
        <span class="ma-sep"></span>
      </div>

      <div class="ma-logos">
        <img src="../assets/background/adidas.svg" />
        <img src="../assets/background/tencent.svg" />
        <img src="../assets/background/dream.svg" />
        <img src="../assets/background/letgo.svg" />
        <img src="../assets/background/yellowhead.svg" />
        <img src="../assets/background/applovin.svg" />
      </div>
    </div>
  </div>
</template>

<script setup>
import MaIcons from "../MaIcons.vue";
</script>

<style scoped>
.ma-testimonial-wrapper {
  @apply rounded-bl-[64px] rounded-tl-[64px] px-[63px] flex flex-col justify-center bg-PrimaryDark bg-right-top bg-no-repeat bg-[url(./src/assets/background/line-patterns.svg)];
}
.ma-quota {
  @apply w-[400px] h-[173px] shrink-0 text-white font-euclid text-xl not-italic font-medium leading-8;
}

.ma-block-quota {
  @apply mt-auto mb-[-5rem];
}

.ma-avatar {
  @apply mt-[25px] mb-[8px];
}

.ma-quota-author-name {
  @apply text-white font-euclid text-base not-italic font-medium leading-6;
}

.ma-quota-author-profession {
  @apply text-gray-400 font-euclid text-sm not-italic font-normal leading-5;
}

.ma-vector {
  @apply bg-[url(./src/assets/background/ma-vector.svg)] ml-[-1rem] mr-[-1rem] bg-no-repeat p-4;
  background-position: 0.25rem 0.5rem;
}
.ma-trusted-footer {
  --tw-text-opacity: 1;
  color: rgb(152 162 179 / var(--tw-text-opacity));
  @apply flex justify-center flex-col gap-9 mt-[12rem] text-xs font-medium;
}
.ma-trusted-by-header {
  @apply flex flex-row items-center;
}

.ma-trusted-by {
  @apply text-sm mx-3;
}
.ma-sep {
  @apply h-[1px] flex-1 w-40;
  --tw-bg-opacity: 1;
  background-color: rgb(52 64 84 / var(--tw-bg-opacity));
  height: 1px;
}

.ma-logos {
  @apply flex flex-row justify-between mb-6;
}
</style>
