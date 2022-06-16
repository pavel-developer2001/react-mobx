import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import post from "../store/post";
import CreatePost from "./CreatePost";
import Post from "./Post";

const Posts = () => {
  const { posts, isLoading, error } = post;
  useEffect(() => {
    post.getPosts();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      <CreatePost />
      {posts.length > 0 ? (
        posts.map((post) => <Post key={post.id} postData={post} />)
      ) : (
        <p>Empty posts :(</p>
      )}
    </div>
  );
};

export default observer(Posts);
