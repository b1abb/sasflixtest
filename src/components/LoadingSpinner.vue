<template>
  <div class="loading">
    <span class="dot" v-for="n in 3" :key="n" :style="{ animationDelay: `${n * 0.2}s` }"></span>
  </div>
</template>

<script setup lang="ts">
import '~/assets/styles/components/LoadingSpinner.css';
</script>