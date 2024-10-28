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

export type CommentOfPost = {
    id: number;
    body: string;
    postId: number;
    likes: number;
    dislikes?: number;
    user: {
        id: number;
        username: string;
        fullName: string;
    };
};

export interface ApiResponse {
    posts: Post[];
    total: number;
    skip: number;
    limit: number;
}

export interface ApiResponseComments {
    comments: CommentOfPost[];
    total: number;
    skip: number;
    limit: number;
}