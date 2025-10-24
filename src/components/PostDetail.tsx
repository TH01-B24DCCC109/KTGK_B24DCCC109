import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Post } from '../types/Post';

interface Props {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const PostDetail: React.FC<Props> = ({ posts, setPosts }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find(p => p.id === id);

  if (!post) return <p>Bài viết không tồn tại.</p>;

  const handleDelete = () => {
    if (window.confirm('Bạn có chắc muốn xóa bài viết này?')) {
      setPosts(prev => prev.filter(p => p.id !== id));
      navigate('/');
    }
  };

  return (
    <div className="container">
      <h1>{post.title}</h1>
      <p><b>Tác giả:</b> {post.author}</p>
      <p><b>Ngày đăng:</b> {post.createdAt}</p>
      <p><b>Thể loại:</b> {post.category}</p>
      <img src={post.thumbnail} alt="thumb" style={{ width: '100%', maxWidth: '600px' }} />
      <p style={{ whiteSpace: 'pre-line', marginTop: '1rem' }}>{post.content}</p>
      <div style={{ marginTop: '2rem' }}>
        <button onClick={() => navigate('/')}>← Quay lại</button>
        <button onClick={() => navigate(`/posts/edit/${post.id}`)}>✏️ Chỉnh sửa</button>
        <button onClick={handleDelete}>🗑️ Xóa</button>
      </div>
    </div>
  );
};

export default PostDetail;

export {};
