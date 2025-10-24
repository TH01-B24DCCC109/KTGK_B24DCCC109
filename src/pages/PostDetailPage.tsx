// src/pages/PostDetailPage.tsx

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Post } from '../types/Post';

interface Props {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const PostDetailPage: React.FC<Props> = ({ posts, setPosts }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find(p => p.id === id);

  if (!post) return <p>Bài viết không tồn tại.</p>;

  const handleDelete = () => {
    const confirm = window.confirm('Bạn có chắc muốn xóa bài viết này?');
    if (confirm) {
      setPosts(prev => prev.filter(p => p.id !== post.id));
      navigate('/');
    }
  };

  return (
    <div className="container">
      <h1>{post.title}</h1>
      <p><strong>Tác giả:</strong> {post.author}</p>
      <p><strong>Ngày đăng:</strong> {post.createdAt}</p>
      <p><strong>Thể loại:</strong> {post.category}</p>

      <img
        src={post.thumbnail}
        alt={post.title}
        style={{ width: '100%', maxWidth: '600px', marginTop: '1rem' }}
      />

      <p style={{ marginTop: '1rem', whiteSpace: 'pre-line' }}>
        {post.content}
      </p>

      <div style={{ marginTop: '2rem' }}>
        <button onClick={() => navigate('/')}>← Quay lại</button>
        <button onClick={() => navigate(`/posts/edit/${post.id}`)}>✏️ Chỉnh sửa</button>
        <button onClick={handleDelete}>🗑️ Xóa bài viết</button>
      </div>
    </div>
  );
};

export default PostDetailPage;

export {};
