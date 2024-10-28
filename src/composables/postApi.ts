import { ref } from 'vue';
import type { ApiResponse, ApiResponseComments, CommentOfPost, Post } from "~/types";

export function usePosts() {
    const posts: Ref<Post[]> = ref([]);
    const loading: Ref<boolean> = ref(true);
    const error: Ref<Error | null> = ref(null);

    const fetchPosts = async (): Promise<void> => {
        try {
            const response: Response = await fetch('https://dummyjson.com/posts?limit=5');
            const data: ApiResponse = await response.json();
            posts.value = data.posts;
        } catch (err) {
            error.value = err instanceof Error ? err : new Error(String(err));
        } finally {
            loading.value = false;
        }
    };

    return { posts, loading, error, fetchPosts };
}

export function useComments(postId: number) {
    const comments: Ref<CommentOfPost[]> = ref([]);
    const loading: Ref<boolean> = ref(true);
    const error: Ref<Error | null> = ref(null);
    const total: Ref<number> = ref(0);

    const fetchComments = async (): Promise<void> => {
        try {
            const response: Response = await fetch(`https://dummyjson.com/posts/${postId}/comments`);
            const data: ApiResponseComments = await response.json();
            comments.value = data.comments;
            total.value = data.total
        } catch (err) {
            error.value = err instanceof Error ? err : new Error(String(err));
        } finally {
            loading.value = false;
        }
    };

    return { comments, loading, error, fetchComments, total };
}