<template>
  <button :class="['reaction-button', buttonTypeClass, { liked }]" @click="toggleReaction">
    <img :class="['icon', { 'icon-liked': liked }]" :src="liked ? iconSrcActive : iconSrcInactive" :alt="buttonText"/>
    {{ buttonText }}
    <span :class="['count', { liked }]">{{ computedCount }}</span>
  </button>
</template>

<script setup>
import { computed } from 'vue';
import { useReactionStore } from '../stores/useReactionStore.ts';

const props = defineProps({
  count: Number,
  type: {
    type: String,
    default: 'like',
  },
  postId: {
    type: Number,
    required: true,
  }
});

const reactionStore = useReactionStore();
const liked = computed(() => {
  return props.type === 'like'
      ? reactionStore.getLikeState(props.postId)
      : reactionStore.getDislikeState(props.postId);
});

function toggleReaction() {
  if (props.type === 'like') {
    reactionStore.toggleLike(props.postId);
  } else {
    reactionStore.toggleDislike(props.postId);
  }
}

const computedCount = computed(() => {
  return liked.value ? props.count + 1 : props.count;
});

const buttonText = computed(() => (props.type === 'like' ? 'Like' : 'Trash'));
const iconSrcInactive = computed(() =>
    props.type === 'like' ? '/icons/like.svg' : '/icons/trash.svg'
);
const iconSrcActive = computed(() =>
    props.type === 'like' ? '/icons/action-like.svg' : '/icons/action-trash.svg'
);
const buttonTypeClass = computed(() => (props.type === 'like' ? 'left-rounded' : 'right-rounded'));
</script>

<style scoped>
.reaction-button {
  font-family: "SF Pro Text", sans-serif;
  background-color: rgba(4, 4, 5, 0.04);
  letter-spacing: -0.08px;
  height: 27px;
  border: none;
  padding: 8px 8px 8px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: rgba(4, 4, 5, 1);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.left-rounded {
  border-top-left-radius: 13px;
  border-bottom-left-radius: 13px;
}

.right-rounded {
  border-top-right-radius: 13px;
  border-bottom-right-radius: 13px;
}

.left-rounded.liked {
  background-color: #FF3B30;
  color: white;
}

.right-rounded.liked {
  background-color: #040405;
  color: white;
}

.icon {
  width: 16px;
  height: 16px;
  transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55), fill 0.3s ease;
  fill: #555;
}

.icon-liked {
  fill: white;
}

.count {
  color: rgba(0, 0, 0, 0.3);
  transition: color 0.3s ease;
}

.left-rounded.liked .count {
  color: white;
}

.right-rounded.liked .count {
  color: rgba(99, 99, 100, 1);
}

.reaction-button.liked .icon {
  transform: scale(1.2);
}

.reaction-button:active .icon {
  transform: scale(1.2) rotate(10deg);
}

.reaction-button.liked .icon-liked {
  animation: smooth-pulse 0.5s ease forwards;
}

@keyframes smooth-pulse {
  0% {
    transform: scale(1) rotate(0deg);
  }
  30% {
    transform: scale(1.1) rotate(5deg);
  }
  70% {
    transform: scale(1.15) rotate(-5deg);
  }
  100% {
    transform: scale(1.1) rotate(0deg);
  }
}
</style>