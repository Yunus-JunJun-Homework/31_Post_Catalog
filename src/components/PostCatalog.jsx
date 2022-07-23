import React, { useState, useEffect } from "react";
import SinglePost from "./SinglePost";

const getUrlPosts = "https://jsonplaceholder.typicode.com/posts";

const PostCatalog = () => {
  const [listPosts, setListPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch(getUrlPosts);
      const data = await response.json();
      setListPosts(data);
    };
    getPosts();
  }, []);

  const renderListPosts = () => {
    return listPosts.map((item, index) => {
      return <SinglePost key={index} singlePost={item} />;
    });
  };

  return (
    <div className="posts">
      <ul style={{ listStyle: "none", marginTop: 10 }} className="posts_list">
        {renderListPosts()}
      </ul>
    </div>
  );
};

export default PostCatalog;
