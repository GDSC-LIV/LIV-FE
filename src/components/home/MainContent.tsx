import React, { useState } from 'react';
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

const MainContent: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('프로젝트 모집');
  const [showMore, setShowMore] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleProfileModal = () => {
    setProfileModalOpen(!profileModalOpen);
  };

  const handleCategoryChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedCategory(newValue);
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
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
        <div className="bg-white p-4 shadow-sm rounded-lg mt-4">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center space-x-4">
              <img
                src="https://i.pinimg.com/originals/a7/ee/b8/a7eeb85a1d27390ebdf770f8cf31e434.jpg"
                alt="Profile"
                className="w-12 h-12 rounded-full cursor-pointer"
                onClick={toggleProfileModal}
              />
              <ProfileModal open={profileModalOpen} onClose={toggleProfileModal} />
              <div>
                <h3 className="font-semibold">username11 </h3>
                <p className="text-gray-600">Backend developer</p>
              </div>
            </div>
            <Button variant="outlined" endIcon={<SendIcon />}>
              지원하기
            </Button>
          </div>

          <h4 className="font-semibold mt-4">프로젝트 주제</h4>
          <p className="mt-2 text-gray-800">웹 프로젝트 </p>
          <h4 className="font-semibold mt-4">모집 분야</h4>
          <p className="mt-2 text-gray-800">프론트엔드, 백엔드, 디자이너</p>

          {!showMore && (
            <Button
              variant="text"
              color="primary"
              onClick={toggleShowMore}
              className="mt-2"
            >
              Read More
            </Button>
          )}

          {showMore && (
            <>
              <h4 className="font-semibold mt-4">온/오프라인 유무</h4>
              <p className="mt-2 text-gray-800">온라인</p>
              <h4 className="font-semibold mt-4">프로젝트 기간</h4>
              <p className="mt-2 text-gray-800">2023-06-01 - 2023-12-31</p>
              <h4 className="font-semibold mt-4">주요 내용</h4>
              <p className="mt-2 text-gray-800">이번 프로젝트는</p>
              <Button
                variant="text"
                color="primary"
                onClick={toggleShowMore}
                className="mt-2"
              >
                Show Less
              </Button>
            </>
          )}

          <img
            src="https://via.placeholder.com/200x100"
            alt="Project"
            className="h-60 mt-4 w-full rounded-lg"
          />
        </div>
      )}

      <Modal open={isModalOpen} onClose={toggleModal}>
        <PostModal onClose={toggleModal} />
      </Modal>
    </section>
  );
};

export default MainContent;
