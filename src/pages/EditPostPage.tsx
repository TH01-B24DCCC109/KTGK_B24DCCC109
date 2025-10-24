// src/pages/EditPostPage.tsx

import React from 'react';
import { useParams } from 'react-router-dom';
import { Post } from '../types/Post';
import PostForm from '../components/PostForm';

interface Props {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const EditPostPage: React.FC<Props> = ({ posts, setPosts }) => {
  const { id } = useParams();
  const postToEdit = posts.find(p => p.id === id);

  if (!postToEdit) return <p>Bài viết không tồn tại.</p>;

  const handleSubmit = (updatedPost: Post) => {
    setPosts(prev => prev.map(p => (p.id === updatedPost.id ? updatedPost : p)));
  };

  return (
    <div>
      <h1>Chỉnh sửa bài viết</h1>
      <PostForm onSubmit={handleSubmit} initialData={postToEdit} isEdit />
    </div>
  );
};

export default EditPostPage;

export {};
