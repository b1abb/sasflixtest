<template>
  <div class="post-item">
    <h2 class="post-title">{{ post.title }}</h2>
    <p class="post-content">{{ post.body }}</p>
    <div class="post-actions">
      <div class="buttons">
        <ReactionButton :count="post.reactions.likes" type="like" :postId="post.id" />
        <ReactionButton :count="post.reactions.dislikes" type="dislike" :postId="post.id" />
      </div>
      <a href="#" class="comments-link">Open comments</a>
      <span class="date">Today</span>
      <div class="post-tags">
        <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { Post } from '~/composables/postApi.ts';
import ReactionButton from "~/components/ReactionButton.vue";

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
  margin-bottom: 12px;
  gap: 8px;
}
.buttons {
  display: flex;
  gap: 1px;
}
.comments-link {
  color: #FF6B00;
  text-decoration: none;
  font-size: 14px;
  border-bottom: 1px solid rgba(255, 107, 0, 0.3);
  font-family: "SF Pro Text", sans-serif;
  letter-spacing: -0.08px;
}
.date {
  font-size: 14px;
  color: rgba(4, 4, 5, 0.22);
  font-family: "SF Pro Text", sans-serif;
  letter-spacing: -0.08px;
}
.post-tags {
  display: flex;
  gap: 8px;
}
.tag {
  font-family: "SF Pro Text", sans-serif;
  letter-spacing: -0.08px;
  display: inline-block;
  color: black;
  font-size: 14px;
  background: #f1f1f1;
  height: 18px;
  padding-right: 4px;
  padding-left: 4px;
  position: relative;
  border-radius: 4px;
  text-decoration: none;
}
.tag:first-of-type {
  padding-right: 4px;
  padding-left: 11px;
  clip-path: polygon(15% 0%, 100% 0%, 100% 100%, 15% 100%, 0% 50%);
}
</style>