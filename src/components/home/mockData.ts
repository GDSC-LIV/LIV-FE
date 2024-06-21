// Type definitions for the posts
export type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
  profilePicUrl: string;
  category: string;
  startDate: string;
  endDate: string;
  comments: Comment[];
};

export type Comment = {
  id: number;
  text: string;
  timestamp: Date;
  author: string;
  profilePicUrl: string;
};

// Mock data
export const posts: Post[] = [
  {
    id: 1,
    title: "프로젝트 모집: 웹 앱 개발",
    content: "웹 프로젝트를 위한 프론트엔드 개발자 모집 중입니다. React 경험 필요.",
    author: "username11",
    profilePicUrl: "https://via.placeholder.com/150",
    category: "프로젝트 모집",
    startDate: "2023-06-01",
    endDate: "2023-12-31",
    comments: [
      {
        id: 1,
        text: "이 프로젝트에 관심이 있습니다. 더 자세한 정보를 받을 수 있나요?",
        timestamp: new Date(),
        author: "commenter1",
        profilePicUrl: "https://via.placeholder.com/150",
      }
    ]
  },
  {
    id: 2,
    title: "광고나 홍보성 글: 새로운 테크 스타트업",
    content: "혁신적인 기술로 시장을 변화시킬 스타트업을 소개합니다.",
    author: "username22",
    profilePicUrl: "https://via.placeholder.com/150",
    category: "광고나 홍보성 글",
    startDate: "",
    endDate: "",
    comments: []
  },
  {
    id: 3,
    title: "개인 맞춤형 자동 피드보기: AI 추천 시스템",
    content: "개인의 취향과 관심사에 맞춘 콘텐츠를 추천해드립니다.",
    author: "username33",
    profilePicUrl: "https://via.placeholder.com/150",
    category: "개인 맞춤형 자동 피드보기",
    startDate: "",
    endDate: "",
    comments: []
  }
];

export default posts;
