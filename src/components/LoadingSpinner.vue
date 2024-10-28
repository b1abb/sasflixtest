<template>
  <div class="loading">
    <span class="dot" v-for="n in 3" :key="n" :style="{ animationDelay: `${n * 0.2}s` }"></span>
  </div>
</template>

<script setup>
</script>

<style scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.dot {
  width: 8px;
  height: 8px;
  background-color: #333;
  border-radius: 50%;
  animation: bounce 0.6s infinite;
}

@keyframes bounce {
  0%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
}
</style>