import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { IArticle, IArticlesContext } from "./types";

// 这样处理一下, 可以避免在这里就传入 default context value
const ArticleContext = createContext<IArticlesContext | undefined>(undefined);
// 代替 useContext
const useArticleContext = () => {
  const articleContext = useContext(ArticleContext);
  if (!articleContext) {
    throw new Error(
      "useArticleContext() must be used within the ArticleContext.Provider)"
    );
  }
  return articleContext;
};

const useArticleLoad = () => {
  const { fetchPosts } = useArticleContext();
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);
};

const useArticleManage = () => {
  const { posts, removePost } = useArticleContext();
  const removePostCb = useCallback(
    (id: number) => {
      return () => {
        removePost(id);
      };
    },
    [removePost]
  );
  return { posts, removePostCb };
};

const Son: React.FC = () => {
  const articleManage = useArticleManage();
  useArticleLoad();
  return (
    <div>
      {articleManage.posts.map((a) => (
        <div
          key={a.id}
          // 箭头函数每次 re render 都会重新创建, 不推荐
          // 可通过  use callback 缓存一下
          // onClick={() => {
          //   articleContext.removePost(a.id);
          // }}
          onClick={articleManage.removePostCb(a.id)}
        >
          <h2>{a.title}</h2>
          <p>{a.body}</p>
        </div>
      ))}
    </div>
  );
};

// 这个方法 和前面的 useArticleContext 不同
// 本方法用来为 Provider 设置值, 而 useArticleContext 用来使用值
const useArticleContextInit = () => {
  const [posts, setPosts] = useState<Array<IArticle>>([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = useCallback(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json())
      .then((data) => {
        setPosts(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const removePost = useCallback((id: number) => {
    setLoading(true);
    // delete post in server
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      // delete post in state
      .then(() => {
        setPosts((prev) => prev.filter((p) => p.id !== id));
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // 性能不好
  // 使用 usememo 优化
  //
  // return {
  //   posts,
  //   loading,
  //   fetchPosts,
  //   removePost,
  // };
  return useMemo(
    () => ({
      posts,
      loading,
      fetchPosts,
      removePost,
    }),
    [posts, loading, fetchPosts, removePost]
  );
};

const ArticleList: React.FC = () => {
  const { posts, loading, fetchPosts, removePost } = useArticleContextInit();

  return (
    <ArticleContext.Provider
      value={{
        posts,
        loading,
        fetchPosts,
        removePost,
      }}
    >
      <Son />
    </ArticleContext.Provider>
  );
};

export default ArticleList;
