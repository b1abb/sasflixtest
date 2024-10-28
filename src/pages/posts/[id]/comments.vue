<template>
  <div class="comments-page">
    <PostItem :post="post" :showCommentsLink="false" v-if="post" />
    <CommentList :comments="comments" />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { usePostStore } from '~/stores/usePostStore';
import { useComments } from '~/composables/postApi';
import CommentList from '~/components/CommentList.vue';
import PostItem from '~/components/PostItem.vue';

const route = useRoute();
const postId = parseInt(route.params.id as string);
const postStore = usePostStore();
const loading = ref(true);

const { comments, fetchComments, total } = useComments(postId);
const post = computed(() => postStore.selectedPost);

async function loadComments() {
  try {
    loading.value = true;
    await fetchComments();
  } catch (err) {
    console.error("Failed to fetch comments:", err);
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  loadComments();
});
</script>

<style scoped>
.comments-page {
  width: 676px;
  margin: 0;
}
.post-reactions span {
  margin-right: 12px;
}
</style>