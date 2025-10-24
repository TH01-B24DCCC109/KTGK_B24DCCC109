// src/pages/CreatePostPage.tsx

import React from 'react';
import { Post } from '../types/Post';
import PostForm from '../components/PostForm';

interface Props {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const CreatePostPage: React.FC<Props> = ({ posts, setPosts }) => {
  const handleSubmit = (newPost: Post) => {
    setPosts([newPost, ...posts]); // thêm bài mới vào đầu danh sách
  };

  return (
    <div>
      <h1>Viết bài mới</h1>
      <PostForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreatePostPage;

export {};
