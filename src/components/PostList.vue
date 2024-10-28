<template>
  <div class="post-list">
    <PostItem v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script setup>
import { usePosts } from '~/composables/postApi.ts';
import { onMounted } from 'vue';
import PostItem from './PostItem.vue';

const { posts, fetchPosts } = usePosts();

onMounted(() => {
  fetchPosts();
});
</script>

<style scoped>
</style>