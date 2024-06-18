import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import Modal from '@mui/material/Modal';
import PostModal from '../home/PostModal';
import ProfileModal from '../home/ProfileModal';

interface Post {
  id: number;
  username: string;
  role: string;
  profileImg: string;
  projectTitle: string;
  projectDescription: string;
  projectFields: string;
  onlineStatus: string;
  projectDuration: string;
  projectDetails: string;
  projectImg: string;
}

const mockPosts: Post[] = [
  {
    id: 1,
    username: 'username1',
    role: 'Frontend Developer',
    profileImg: 'https://i.pinimg.com/originals/a7/ee/b8/a7eeb85a1d27390ebdf770f8cf31e434.jpg',
    projectTitle: '웹 프로젝트 1',
    projectDescription: '웹 프로젝트 설명 1',
    projectFields: '프론트엔드, 백엔드, 디자이너',
    onlineStatus: '온라인',
    projectDuration: '2023-06-01 - 2023-12-31',
    projectDetails: '프로젝트 상세 내용 1',
    projectImg: 'https://via.placeholder.com/200x100',
  },
  {
    id: 2,
    username: 'username2',
    role: 'Backend Developer',
    profileImg: 'https://i.pinimg.com/originals/a7/ee/b8/a7eeb85a1d27390ebdf770f8cf31e434.jpg',
    projectTitle: '웹 프로젝트 2',
    projectDescription: '웹 프로젝트 설명 2',
    projectFields: '프론트엔드, 백엔드, 디자이너',
    onlineStatus: '온라인',
    projectDuration: '2023-06-01 - 2023-12-31',
    projectDetails: '프로젝트 상세 내용 2',
    projectImg: 'https://via.placeholder.com/200x100',
  },
  {
    id: 3,
    username: 'username3',
    role: 'Full Stack Developer',
    profileImg: 'https://i.pinimg.com/originals/a7/ee/b8/a7eeb85a1d27390ebdf770f8cf31e434.jpg',
    projectTitle: '웹 프로젝트 3',
    projectDescription: '웹 프로젝트 설명 3',
    projectFields: '프론트엔드, 백엔드, 디자이너',
    onlineStatus: '온라인',
    projectDuration: '2023-06-01 - 2023-12-31',
    projectDetails: '프로젝트 상세 내용 3',
    projectImg: 'https://via.placeholder.com/200x100',
  },
];

const MainContent: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('프로젝트 모집');
  const [showMore, setShowMore] = useState<{ [key: number]: boolean }>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [profileModalPosition, setProfileModalPosition] = useState<{ top: number, left: number }>({ top: 0, left: 0 });
  const [selectedProfileId, setSelectedProfileId] = useState<number | null>(null);

  const profileRef = useRef<HTMLImageElement>(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleProfileModal = (postId: number) => {
    if (profileRef.current) {
      const rect = profileRef.current.getBoundingClientRect();
      setProfileModalPosition({
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX - 300, // Adjust left margin as needed
      });
    }
    setSelectedProfileId(postId);
    setProfileModalOpen(true);
  };

  const handleCategoryChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedCategory(newValue);
  };

  const toggleShowMore = (postId: number) => {
    setShowMore(prevState => ({
      ...prevState,
      [postId]: !prevState[postId]
    }));
  };

  return (
    <section className="w-2/3">
      <div className="flex bg-white p-4 shadow-sm rounded-lg">
        <img
          src="https://i.pinimg.com/originals/a7/ee/b8/a7eeb85a1d27390ebdf770f8cf31e434.jpg"
          alt="Profile"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div className="flex-grow">
          <button
            className="w-full border border-gray-300 rounded-lg p-4 text-gray-400 flex justify-between items-center hover:bg-gray-100"
            onClick={toggleModal}
          >
            Start a Post
            <AttachFileIcon className="text-gray-400" />
          </button>
        </div>
      </div>

      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={selectedCategory}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleCategoryChange}
              aria-label="lab API tabs example"
            >
              <Tab label="Recruit" value="프로젝트 모집" />
              <Tab label="promotion" value="광고나 홍보성 글" />
              <Tab label="Recommend" value="개인 맞춤형 자동 피드보기" />
            </TabList>
          </Box>
        </TabContext>
      </Box>

      {selectedCategory === "프로젝트 모집" && (
        <div>
          {mockPosts.map(post => (
            <div key={post.id} className="bg-white p-4 shadow-sm rounded-lg mt-4">
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center space-x-4">
                  <img
                    ref={profileRef}
                    src={post.profileImg}
                    alt="Profile"
                    className="w-12 h-12 rounded-full cursor-pointer"
                    onClick={() => toggleProfileModal(post.id)}
                  />
                  {selectedProfileId === post.id && (
                    <ProfileModal
                      open={profileModalOpen}
                      onClose={() => setProfileModalOpen(false)}
                      position={profileModalPosition}
                    />
                  )}
                  <div>
                    <h3 className="font-semibold">{post.username}</h3>
                    <p className="text-gray-600">{post.role}</p>
                  </div>
                </div>
                <Button variant="outlined" endIcon={<SendIcon />}>
                  지원하기
                </Button>
              </div>

              <h4 className="font-semibold mt-4">{post.projectTitle}</h4>
              <p className="mt-2 text-gray-800">{post.projectDescription}</p>
              <h4 className="font-semibold mt-4">모집 분야</h4>
              <p className="mt-2 text-gray-800">{post.projectFields}</p>

              {!showMore[post.id] && (
                <Button
                  variant="text"
                  color="primary"
                  onClick={() => toggleShowMore(post.id)}
                  className="mt-2"
                >
                  Read More
                </Button>
              )}

              {showMore[post.id] && (
                <>
                  <h4 className="font-semibold mt-4">온/오프라인 유무</h4>
                  <p className="mt-2 text-gray-800">{post.onlineStatus}</p>
                  <h4 className="font-semibold mt-4">프로젝트 기간</h4>
                  <p className="mt-2 text-gray-800">{post.projectDuration}</p>
                  <h4 className="font-semibold mt-4">주요 내용</h4>
                  <p className="mt-2 text-gray-800">{post.projectDetails}</p>
                  <Button
                    variant="text"
                    color="primary"
                    onClick={() => toggleShowMore(post.id)}
                    className="mt-2"
                  >
                    Show Less
                  </Button>
                </>
              )}

              <img
                src={post.projectImg}
                alt="Project"
                className="h-60 mt-4 w-full rounded-lg"
              />
            </div>
          ))}
        </div>
      )}

      <Modal open={isModalOpen} onClose={toggleModal}>
        <PostModal onClose={toggleModal} />
      </Modal>
    </section>
  );
};

export default MainContent;
