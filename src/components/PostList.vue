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
.post-list {
  //max-width: 800px;
  //margin: 0 auto;
  //padding: 16px;
  //display: flex;
  //flex-direction: column;
  //gap: 24px;
}
</style>