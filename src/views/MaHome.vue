<template>
  <div class="ma-home">
    <RouterLink to="/register">
    Register
  </RouterLink>
  <RouterLink to="/login">
    Login
  </RouterLink>
  </div>
  
</template>

<script setup></script>

<style scoped>
.ma-home{
  @apply flex gap-64
}
</style>
