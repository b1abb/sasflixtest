<template>
  <div class="post-item">
    <h2 class="post-title">{{ post.title }}</h2>
    <p class="post-content">{{ post.body }}</p>
    <div class="post-actions">
      <LikeButton :count="post.reactions.likes" />
      <button class="trash-button">
        <img src="../public/icons/trash.svg" alt="trash" />
        Trash {{ post.reactions.dislikes }}</button>
      <a href="#" class="comments-link">Open comments</a>
      <span class="date">Today</span>
      <div class="post-tags">
        <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LikeButton from './LikeButton.vue';
import type { PropType } from 'vue';
import type { Post } from '~/composables/postApi.ts';

const props = defineProps({
  post: {
    type: Object as PropType<Post>,
    required: true
  }
});
</script>

<style scoped>
.post-item {
  width: 676px;
  margin-bottom: 32px;
}
.post-title {
  font-family: "SF Pro Text Bold", sans-serif;
  font-size: 28px;
  line-height: 0.7;
  margin-top: 0;
  letter-spacing: -1.45px;
  color: #05090E;
  margin-bottom: 16px;
}
.post-content {
  font-family: "SF Pro Text Regular", sans-serif;
  font-size: 20px;
  line-height: 1;
  letter-spacing: -1px;
  color: #05090E;
  margin-bottom: 24px;
}
.post-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}
.trash-button {
  background: none;
  border: none;
  color: #555;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 4px;
}
.comments-link {
  color: #f57c00;
  text-decoration: none;
  font-size: 14px;
}
.date {
  font-size: 12px;
  color: #888;
}
.post-tags {
  display: flex;
  gap: 8px;
  margin-top: 8px;
}
.tag {
  background-color: #eee;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 12px;
  color: #666;
}
</style>