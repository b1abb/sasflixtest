<template>
  <div class="post-item">
    <h2 class="post-title">{{ post.title }}</h2>
    <p class="post-content">{{ post.body }}</p>
    <div class="post-actions">
      <div class="buttons">
        <ReactionButton :count="post.reactions.likes" type="like" :postId="post.id" />
        <ReactionButton :count="post.reactions.dislikes" type="dislike" :postId="post.id" />
      </div>
      <router-link v-if="showCommentsLink"
                   :to="`/posts/${post.id}/comments`"
                   class="comments-link"
                   @click="setPostInStore">
        Open comments
      </router-link>
      <span class="date">Today</span>
      <div class="post-tags">
        <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import ReactionButton from "~/components/ReactionButton.vue";
import '~/assets/styles/components/PostItem.css';
import type { Post } from "~/types";

const props = defineProps({
  post: {
    type: Object as PropType<Post>,
    required: true
  },
  showCommentsLink: {
    type: Boolean,
    default: true
  }
});

const postStore = usePostStore();

function setPostInStore() {
  postStore.setSelectedPost(props.post);
}
</script>