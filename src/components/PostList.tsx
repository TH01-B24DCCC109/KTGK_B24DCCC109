import React from 'react';
import { Post } from '../types/Post';
import PostCard from './PostCard';

interface Props {
  posts: Post[];
  onDelete: (id: string) => void;
}

const PostList: React.FC<Props> = ({ posts, onDelete }) => {
  if (posts.length === 0) return <p>Không có bài viết nào.</p>;

  return (
    <div className="grid">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default PostList;

export {};
