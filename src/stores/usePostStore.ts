import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Post } from '~/composables/postApi';

export const usePostStore = defineStore('post', () => {
    const selectedPost = ref<Post | null>(null);

    function setSelectedPost(post: Post) {
        selectedPost.value = post;
    }

    function clearSelectedPost() {
        selectedPost.value = null;
    }

    return { selectedPost, setSelectedPost, clearSelectedPost };
});