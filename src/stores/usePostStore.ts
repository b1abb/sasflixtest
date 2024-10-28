import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Post } from "~/types";

export const usePostStore = defineStore('post', () => {
    const selectedPost = ref<Post | null>(null);

    function setSelectedPost(post: Post): void {
        selectedPost.value = post;
    }

    return { selectedPost, setSelectedPost };
});