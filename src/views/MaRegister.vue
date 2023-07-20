<template>
  <div>
    <MaButton intent="primary">Create a free account</MaButton>
    <MaButton :class="buttonClass">
        <MaIcons name="gmaillogo" class="w-6 h-6 z-10" />
        Continue with Google
      </MaButton>
  </div>
  <div>
    <MaInput intent="primary">Create a free account</MaInput>
  </div>
</template>

<script setup>
import MaIcons from "../MaIcons.vue";
import MaButton from "../components/MaButton.vue";
import MaInput from "../components/MaInput.vue";
</script>

<style scoped>
.ma-button {
  @apply inline-flex items-center;
}
</style>
