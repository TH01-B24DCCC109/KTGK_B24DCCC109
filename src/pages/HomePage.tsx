// src/pages/HomePage.tsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Post } from '../types/Post';
import PostList from '../components/PostList';

interface Props {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const HomePage: React.FC<Props> = ({ posts, setPosts }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const handleDelete = (id: string) => {
    const confirm = window.confirm('Bạn có chắc muốn xóa bài viết này?');
    if (confirm) {
      setPosts(prev => prev.filter(p => p.id !== id));
    }
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Danh sách bài viết ({filteredPosts.length})</h1>
      <input
        type="text"
        placeholder="Tìm kiếm theo tiêu đề..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => navigate('/create')}>+ Viết bài mới</button>

      <PostList posts={filteredPosts} onDelete={handleDelete} />
    </div>
  );
};

export default HomePage;

export {};
