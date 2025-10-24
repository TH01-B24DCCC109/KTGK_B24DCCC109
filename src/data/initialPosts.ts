// src/data/initialPosts.ts

import { Post } from "../types/Post";

export const initialPosts: Post[] = [
  {
    id: '1',
    title: 'Khám phá Đà Lạt',
    author: 'Nguyễn Văn A',
    thumbnail: 'https://via.placeholder.com/300x180',
    content: 'Đà Lạt là một trong những điểm đến du lịch nổi tiếng của Việt Nam. Với khí hậu ôn hòa và cảnh quan thiên nhiên tuyệt đẹp, nơi đây thu hút hàng triệu lượt khách du lịch mỗi năm.',
    category: 'Du lịch',
    createdAt: '2023-10-20',
  },
  {
    id: '2',
    title: 'ReactJS là gì?',
    author: 'Lê Văn B',
    thumbnail: 'https://via.placeholder.com/300x180',
    content: 'ReactJS là một thư viện JavaScript phổ biến dùng để xây dựng giao diện người dùng, đặc biệt là các ứng dụng web đơn trang (SPA).',
    category: 'Công nghệ',
    createdAt: '2023-09-15',
  },
  {
    id: '3',
    title: 'Cách làm phở bò chuẩn vị Hà Nội',
    author: 'Nguyễn Thị C',
    thumbnail: 'https://via.placeholder.com/300x180',
    content: 'Phở bò là món ăn truyền thống nổi tiếng của Việt Nam. Để làm được bát phở chuẩn vị cần sự cầu kỳ trong từng công đoạn từ nước dùng đến bánh phở và thịt bò.',
    category: 'Ẩm thực',
    createdAt: '2023-08-10',
  },
  {
    id: '4',
    title: 'Bí quyết sống khỏe mỗi ngày',
    author: 'Phạm Văn D',
    thumbnail: 'https://via.placeholder.com/300x180',
    content: 'Một lối sống lành mạnh bao gồm chế độ ăn uống hợp lý, tập thể dục thường xuyên và giữ tinh thần thoải mái. Điều này sẽ giúp bạn sống khỏe và sống lâu hơn.',
    category: 'Đời sống',
    createdAt: '2023-07-01',
  },
  {
    id: '5',
    title: 'Du lịch miền Trung: Những địa điểm không thể bỏ qua',
    author: 'Trần Thị E',
    thumbnail: 'https://via.placeholder.com/300x180',
    content: 'Miền Trung Việt Nam sở hữu nhiều bãi biển đẹp, di tích lịch sử và văn hóa đa dạng như Đà Nẵng, Hội An, Huế,...',
    category: 'Du lịch',
    createdAt: '2023-06-12',
  },
];

export {};
