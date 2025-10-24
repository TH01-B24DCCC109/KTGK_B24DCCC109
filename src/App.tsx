import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CreatePostPage from './pages/CreatePostPage';
import PostDetailPage from './pages/PostDetailPage';
import EditPostPage from './pages/EditPostPage';
import { Post } from './types/Post';
import { initialPosts } from './data/initialPosts';

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  return (
    <BrowserRouter>
      <div className="app-root">
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage posts={posts} setPosts={setPosts} />} />
            <Route path="/posts" element={<HomePage posts={posts} setPosts={setPosts} />} />

            <Route path="/create" element={<CreatePostPage posts={posts} setPosts={setPosts} />} />
            <Route path="/posts/create" element={<CreatePostPage posts={posts} setPosts={setPosts} />} />

            <Route path="/posts/:id" element={<PostDetailPage posts={posts} setPosts={setPosts} />} />
            <Route path="/posts/edit/:id" element={<EditPostPage posts={posts} setPosts={setPosts} />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;

