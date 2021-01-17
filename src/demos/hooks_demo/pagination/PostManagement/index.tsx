import axios from "axios";
import React, { useEffect, useState } from "react";
import { Post } from "./types/posts";
import ss from "./index.module.css";
import Posts from "./Posts";
import Pagination from "./Pagination";

const PostManagement: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [curPage, setCurPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [posts, setPosts] = useState<Array<Post>>([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const resp = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(resp.data);
      setLoading(false);
    })();
  }, []);

  // get the current post
  const indexOfLastPost = curPage * pageSize;
  const indexOfFirstPost = indexOfLastPost - pageSize;
  const curPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="ss.container">
      <h1>post management</h1>
      <Posts posts={curPosts} loading={loading} />
      <Pagination
        click={(nu) => {
          setCurPage(nu);
        }}
        pageSize={pageSize}
        total={posts.length}
      />
    </div>
  );
};

export default PostManagement;
