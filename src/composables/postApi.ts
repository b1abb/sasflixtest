import { ref } from 'vue';

export type Post = {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: {
        likes: number;
        dislikes: number;
    };
    views: number;
    userId: number;
}

interface ApiResponse {
    posts: Post[];
    total: number;
    skip: number;
    limit: number;
}

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
    const comments: Ref<any[]> = ref([]);
    const loading: Ref<boolean> = ref(true);
    const error: Ref<Error | null> = ref(null);

    const fetchComments = async (): Promise<void> => {
        try {
            const response: Response = await fetch(`https://dummyjson.com/posts/${postId}/comments`);
            const data = await response.json();
            comments.value = data.comments;
        } catch (err) {
            error.value = err instanceof Error ? err : new Error(String(err));
        } finally {
            loading.value = false;
        }
    };

    return { comments, loading, error, fetchComments };
}