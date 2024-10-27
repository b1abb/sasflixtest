<template>
  <button :class="['like-button', { liked }]" @click="toggleLike">
    <img src="../public/icons/like.svg" alt="Like" /> Like {{ count }}
  </button>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  count: Number
});

const liked = ref(false);

function toggleLike() {
  liked.value = !liked.value;
}

const computedCount = computed(() => {
  return liked.value ? props.count + 1 : props.count;
});
</script>

<style scoped>
.like-button {
  font-family: "SF Pro Text", sans-serif;
  background-color: #f1f1f1;
  letter-spacing: -0.08px;
  border: none;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  padding: 6px 8px 6px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  color: #555;
}
.like-button.liked {
  background-color: #ff5252;
  color: white;
}
</style>