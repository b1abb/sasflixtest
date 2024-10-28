import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useReactionStore = defineStore('reaction', () => {
    const likeStates = ref<{ [key: string]: boolean }>({});
    const dislikeStates = ref<{ [key: string]: boolean }>({});

    function toggleLike(postId: number): void {
        if (!likeStates.value[postId]) {
            likeStates.value[postId] = true;
            dislikeStates.value[postId] = false;
        } else {
            likeStates.value[postId] = false;
        }
    }

    function toggleDislike(postId: number): void {
        if (!dislikeStates.value[postId]) {
            dislikeStates.value[postId] = true;
            likeStates.value[postId] = false;
        } else {
            dislikeStates.value[postId] = false;
        }
    }

    function getLikeState(postId: number): boolean {
        return likeStates.value[postId] || false;
    }

    function getDislikeState(postId: number): boolean {
        return dislikeStates.value[postId] || false;
    }

    return { getLikeState, getDislikeState, toggleLike, toggleDislike };
});