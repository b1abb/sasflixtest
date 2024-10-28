<template>
  <div v-if="!isDeleted" class="comment-item">
    <div class="avatar">
      <img src="~/public/icons/avatar.svg" alt="avatar">
    </div>
    <div class="content">
      <p class="comment-user">{{ comment.user.fullName }}<span>(@{{ comment.user.username }})</span></p>
      <p class="comment-content">{{ comment.body }}</p>
      <div class="comment-actions">
        <span class="date">Today</span>
        <div class="comments-link" @click="deleteComment">
          Delete
        </div>
      </div>
    </div>
  </div>
  <div v-else class="comment-item">
    <div class="avatar">
      <img src="~/public/icons/avatar.svg" alt="avatar">
    </div>
    <div class="content">
      <p class="comment-user">{{ comment.user.fullName }}<span>(@{{ comment.user.username }})</span></p>
      <p class="comment-content">This comment has been deleted. <span @click="restoreComment" class="return-button">Return</span></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { Comment } from '~/composables/postApi.ts';

const props = defineProps({
  comment: {
    type: Object as PropType<Comment>,
    required: true
  }
});

const isDeleted = ref(false);

function deleteComment() {
  isDeleted.value = true;
}

function restoreComment() {
  isDeleted.value = false;
}
</script>

<style scoped>
.comment-item {
  width: 676px;
  margin-top: 24px;
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
}
.return-button {
  color: rgba(255, 107, 0, 1);
  font-size: 20px;
  border-bottom: 1px solid rgba(255, 211, 179, 1);
  font-family: "Regular", sans-serif;
  margin-left: 8px;
}
.comment-user {
  margin-top: 0;
  margin-bottom: 12px;
  font-family: "SF Pro Text Semibold", sans-serif;
  font-size: 20px;
  line-height: 0.7;
  letter-spacing: -1px;
}

.comment-content {
  margin-top: 0;
  font-family: "SF Pro Text Regular", sans-serif;
  font-size: 20px;
  line-height: 0.7;
  letter-spacing: -1px;
  color: #05090E;
  margin-bottom: 16px;
}

.comment-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

.comments-link {
  color: rgba(255, 59, 48, 1);
  font-size: 14px;
  border-bottom: 1px solid rgba(235, 87, 87, 1);
  font-family: "SF Pro Text", sans-serif;
  letter-spacing: -0.08px;
  cursor: pointer;
}

.date {
  font-size: 14px;
  color: rgba(4, 4, 5, 0.22);
  font-family: "SF Pro Text", sans-serif;
  letter-spacing: -0.08px;
}
</style>