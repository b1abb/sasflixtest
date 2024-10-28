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
import '~/assets/styles/components/ReactionButton.css';

const props = defineProps({
  count: Number,
  type: {
    type: String,
    default: 'like',
  },
  postId: {
    type: Number,
    required: true,
  },
});

const reactionStore = useReactionStore();

const liked = computed(() =>
    props.type === 'like'
        ? reactionStore.getLikeState(props.postId)
        : reactionStore.getDislikeState(props.postId)
);

const computedCount = computed(() => (liked.value ? props.count + 1 : props.count));
const buttonText = computed(() => (props.type === 'like' ? 'Like' : 'Trash'));
const iconSrcInactive = computed(() =>
    props.type === 'like' ? '/icons/like.svg' : '/icons/trash.svg'
);
const iconSrcActive = computed(() =>
    props.type === 'like' ? '/icons/action-like.svg' : '/icons/action-trash.svg'
);
const buttonTypeClass = computed(() => (props.type === 'like' ? 'left-rounded' : 'right-rounded'));

function toggleReaction() {
  if (props.type === 'like') {
    reactionStore.toggleLike(props.postId);
  } else {
    reactionStore.toggleDislike(props.postId);
  }
}
</script>