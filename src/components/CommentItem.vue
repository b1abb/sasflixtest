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
import '~/assets/styles/components/CommentItem.css';
import type { CommentOfPost } from "~/types";

const props = defineProps({
  comment: {
    type: Object as PropType<CommentOfPost>,
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