import { useState, useEffect } from "react";
import axios from "axios";

const api_url = "https://jsonplaceholder.typicode.com/posts";
const About = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(`${api_url}`);
      setPosts(response?.data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>About</h1>
      <ul>
        {posts.map((post) => (
          <li key={post?.id}>{post?.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default About;
