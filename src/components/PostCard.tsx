import React from 'react';
import { Post } from '../types/Post';
import { useNavigate } from 'react-router-dom';

interface Props {
  post: Post;
  onDelete: (id: string) => void;
}

const PostCard: React.FC<Props> = ({ post, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <img src={post.thumbnail} alt={post.title} />
      <h3>{post.title}</h3>
      <p><b>{post.author}</b> - {post.createdAt}</p>
      <p>{post.content.slice(0, 100)}...</p>
      <button onClick={() => navigate(`/posts/${post.id}`)}>Đọc thêm</button>
      <button onClick={() => onDelete(post.id)}>🗑️ Xóa</button>
    </div>
  );
};

export default PostCard;

export {};
