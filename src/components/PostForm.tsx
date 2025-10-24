import React, { useState } from 'react';
import { Post } from '../types/Post';
import { useNavigate } from 'react-router-dom';

interface Props {
  onSubmit: (post: Post) => void;
  initialData?: Post;
  isEdit?: boolean;
}

const PostForm: React.FC<Props> = ({ onSubmit, initialData, isEdit = false }) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [author, setAuthor] = useState(initialData?.author || '');
  const [thumbnail, setThumbnail] = useState(initialData?.thumbnail || '');
  const [content, setContent] = useState(initialData?.content || '');
  const [category, setCategory] = useState(initialData?.category || 'Công nghệ');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (title.length < 10 || author.length < 3 || content.length < 50) {
      alert('Vui lòng điền đúng thông tin');
      return;
    }

    const post: Post = {
      id: initialData?.id || Date.now().toString(),
      title,
      author,
      thumbnail,
      content,
      category,
      createdAt: initialData?.createdAt || new Date().toISOString().split('T')[0],
    };

    onSubmit(post);

    alert(isEdit ? 'Cập nhật thành công!' : 'Đăng bài thành công!');
    navigate(isEdit ? `/posts/${post.id}` : '/');
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <input placeholder="Tiêu đề" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input placeholder="Tác giả" value={author} onChange={(e) => setAuthor(e.target.value)} required />
      <input placeholder="Ảnh thumbnail (URL)" value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} />
      <select value={category} onChange={(e) => setCategory(e.target.value as Post['category'])}>
        <option>Công nghệ</option>
        <option>Du lịch</option>
        <option>Ẩm thực</option>
        <option>Đời sống</option>
        <option>Khác</option>
      </select>
      <textarea placeholder="Nội dung" rows={10} value={content} onChange={(e) => setContent(e.target.value)} required />
      <button type="submit">{isEdit ? 'Cập nhật' : 'Đăng bài'}</button>
      <button type="button" onClick={() => navigate(isEdit && initialData ? `/posts/${initialData.id}` : '/')}>
        Hủy
      </button>
    </form>
  );
};

export default PostForm;

export {};
