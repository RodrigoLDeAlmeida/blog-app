import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Menu = ({ cat }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.error("Failed to fetch posts:", err);
      }
    };
    fetchData();
  }, [cat]);

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <img
              src={`../upload/${post?.img}`}
              alt={post.title || "Post image"}
              loading="lazy"
              style={{ width: "100%", objectFit: "cover" }}
            />
            <h2>{post.title}</h2>
            <Link className="link" to={`/post/${post.id}`}><button>
              Read More
            </button></Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Menu;
