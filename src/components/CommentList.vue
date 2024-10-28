<template>
  <h3 v-if="!loading" class="title-comment">{{ totalComments }} {{ commentLabel }}</h3>
  <ul v-if="!loading && comments.length" class="comments-list">
    <CommentItem v-for="comment in comments" :key="comment.id" :comment="comment" />
  </ul>
  <p v-else-if="!loading" class="no-comments">No comments yet.</p>
  <LoadingSpinner v-if="loading" />
</template>

<script setup lang="ts">
import { useComments } from '~/composables/postApi';
import { computed, onMounted, type PropType } from 'vue';
import { useRoute } from 'vue-router';
import LoadingSpinner from "~/components/LoadingSpinner.vue";
import '~/assets/styles/components/CommentList.css';
import type { CommentOfPost } from "~/types";

const route = useRoute();
const postId = parseInt(route.params.id as string);
const { comments, fetchComments, total } = useComments(postId);
const loading = ref(true);
const totalComments = computed(() => total.value);
const commentLabel = computed(() => (totalComments.value < 1 ? 'comment' : 'comments'));
const props = defineProps({
  comments: {
    type: Array as PropType<CommentOfPost[]>,
    required: true
  }
});

async function loadComments() {
  try {
    loading.value = true;
    await fetchComments();
  } catch (error) {
    console.error("Failed to fetch comments:", error);
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  loadComments();
});
</script>