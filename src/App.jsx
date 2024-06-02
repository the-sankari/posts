import axios from "axios";
import React, { useEffect, useState } from "react";
import PostCard from "./components/PostCard";

const App = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/posts");
      setPosts(response.data);
    } catch (error) {
      console.error("Error getting posts", error);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);

  const hanldlePublicaiton = async (id, status) => {
    try {
      await axios.patch(`http://localhost:3000/posts/${id}`, {
        published: !status,
      });
      getPosts();
    } catch (error) {
      console.error("Error updating publication status", error);
    }
  };
  return (
    <div className="container">
      <h1 className="text-center">Posts</h1>
      <div className="container pt-5 row gap-3">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            hanldlePublicaiton={hanldlePublicaiton}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
