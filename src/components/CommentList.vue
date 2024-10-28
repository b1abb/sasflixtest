<template>
  <h3 v-if="!loading" class="title-comment">{{ totalComments }} {{ commentLabel }}</h3>
  <ul v-if="!loading && comments.length" class="comments-list">
    <CommentItem v-for="comment in comments" :key="comment.id" :comment="comment" />
  </ul>
  <p v-else-if="!loading" class="no-comments">No comments yet.</p>
  <LoadingSpinner v-if="loading" />
</template>

<script setup lang="ts">
import { type Comment, useComments } from '~/composables/postApi';
import { computed, onMounted, type PropType } from 'vue';
import { useRoute } from 'vue-router';
import LoadingSpinner from "~/components/LoadingSpinner.vue";

const route = useRoute();
const postId = parseInt(route.params.id as string);
const { comments, fetchComments, total } = useComments(postId);
const loading = ref(true);
const totalComments = computed(() => total.value);
const commentLabel = computed(() => (totalComments.value < 1 ? 'comment' : 'comments'));
const props = defineProps({
  comments: {
    type: Array as PropType<Comment[]>,
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

<style scoped>
.title-comment{
  font-family: "SF Pro Text Bold", sans-serif;
  font-size: 28px;
  line-height: 0.7;
  margin-top: 42px;
  letter-spacing: -1.45px;
}
.comments-list {
  padding: 0;
}
.no-comments {
  margin-top: 0;
  font-family: "SF Pro Text Regular", sans-serif;
  font-size: 20px;
  line-height: 0.7;
  letter-spacing: -1px;
  color: #05090E;
  margin-bottom: 16px;
}
</style>