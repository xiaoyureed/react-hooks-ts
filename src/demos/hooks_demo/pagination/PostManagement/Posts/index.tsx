import React from "react";
import { Post } from "../types/posts";
import ss from './index.module.css';
const Posts: React.FC<{ posts: Array<Post>; loading: boolean }> = ({
  posts,
  loading,
}) => {
  if (loading) {
    return <h2>loading...</h2>;
  }
  return (
    <ul className={ss.items}>
      {posts.map((post) => (
        <li className={ss.item} key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default Posts;
