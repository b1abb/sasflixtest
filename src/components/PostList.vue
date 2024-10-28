<template>
  <div>
    <PostItem v-if="!loading" v-for="post in posts" :key="post.id" :post="post" />
    <LoadingSpinner v-if="loading" />
  </div>
</template>

<script setup>
import { usePosts } from '~/composables/postApi.ts';
import { onMounted } from 'vue';
import PostItem from './PostItem.vue';
import LoadingSpinner from "~/components/LoadingSpinner.vue";

const loading = ref(true);
const { posts, fetchPosts } = usePosts();

async function loadComments() {
  try {
    loading.value = true;
    await fetchPosts();
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