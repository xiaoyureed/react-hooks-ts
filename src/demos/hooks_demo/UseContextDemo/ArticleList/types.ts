export interface IArticle {
  id: number;
  title: string;
  body: string;
}

export interface IArticlesContext {
  posts: Array<IArticle>;
  loading: boolean;
  fetchPosts: () => void;
  removePost: (postId: number) => void;
}