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
import Avatar from '@mui/material/Avatar';
import { format } from 'date-fns';
import { IconButton } from '@mui/material';
import { FaRegComment, FaRegBookmark } from 'react-icons/fa';

const mockData = [
  {
    id: 1,
    username: 'username11',
    role: 'Backend developer',
    projectTitle: '웹 프로젝트',
    recruitmentField: '프론트엔드, 백엔드, 디자이너',
    online: '온라인',
    projectPeriod: '2023-06-01 - 2023-12-31',
    projectDescription: '이번 프로젝트는...',
    imageUrl: 'https://via.placeholder.com/200x100',
    comments: [],
    contactInfo: 'https://open.kakao.com/o/gxxxxxx', // Add contact info here
  },
  // Add more mock posts as needed
  {
    id: 2,
    username: 'username11',
    role: 'Backend developer',
    projectTitle: '웹 프로젝트',
    recruitmentField: '프론트엔드, 백엔드, 디자이너',
    online: '온라인',
    projectPeriod: '2023-06-01 - 2023-12-31',
    projectDescription: '이번 프로젝트는...',
    imageUrl: 'https://via.placeholder.com/200x100',
    comments: [],
    contactInfo: 'https://open.kakao.com/o/gxxxxxx', // Add contact info here
  },
  {
    id: 3,
    username: 'username11',
    role: 'Backend developer',
    projectTitle: '웹 프로젝트',
    recruitmentField: '프론트엔드, 백엔드, 디자이너',
    online: '온라인',
    projectPeriod: '2023-06-01 - 2023-12-31',
    projectDescription: '이번 프로젝트는...',
    imageUrl: 'https://via.placeholder.com/200x100',
    comments: [],
    contactInfo: 'https://open.kakao.com/o/gxxxxxx', // Add contact info here
  },
];

const MainContent: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('프로젝트 모집');
  const [showMore, setShowMore] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [profileModalPosition, setProfileModalPosition] = useState<{ top: number, left: number }>({ top: 0, left: 0 });
  const [showComments, setShowComments] = useState<{ [key: number]: boolean }>({});
  const [commentText, setCommentText] = useState<string>('');
  const [comments, setComments] = useState<{ id: number, text: string, timestamp: Date }[]>([]);
  const [nextCommentId, setNextCommentId] = useState<number>(1);
  const [contactModalOpen, setContactModalOpen] = useState<boolean>(false);
  const [contactInfo, setContactInfo] = useState<string>('');

  const profileRef = useRef<HTMLImageElement>(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleProfileModal = () => {
    if (profileRef.current) {
      const rect = profileRef.current.getBoundingClientRect();
      setProfileModalPosition({
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX - 300, // Adjust left margin as needed
      });
    }
    setProfileModalOpen(!profileModalOpen);
  };

  const handleCategoryChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedCategory(newValue);
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const toggleComments = (postId: number) => {
    setShowComments(prev => ({ ...prev, [postId]: !prev[postId] }));
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentText(event.target.value);
  };

  const handleSubmitComment = (postId: number) => {
    if (commentText.trim() !== '') {
      const newComment = {
        id: nextCommentId,
        text: commentText,
        timestamp: new Date(),
      };
      setComments([...comments, newComment]);
      setCommentText('');
      setNextCommentId(nextCommentId + 1);
    }
  };

  const toggleContactModal = (info: string) => {
    setContactInfo(info);
    setContactModalOpen(!contactModalOpen);
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

      {selectedCategory === "프로젝트 모집" &&
        mockData.map((post) => (
          <div key={post.id} className="bg-white p-4 shadow-sm rounded-lg mt-4">
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center space-x-4">
                <img
                  ref={profileRef}
                  src="https://i.pinimg.com/originals/a7/ee/b8/a7eeb85a1d27390ebdf770f8cf31e434.jpg"
                  alt="Profile"
                  className="w-12 h-12 rounded-full cursor-pointer"
                  onClick={toggleProfileModal}
                />
                <ProfileModal
                  open={profileModalOpen}
                  onClose={toggleProfileModal}
                  // position={profileModalPosition}
                />
                <div>
                  <h3 className="font-semibold">{post.username} </h3>
                  <p className="text-gray-600">{post.role}</p>
                </div>
              </div>
              <Button
                variant="outlined"
                endIcon={<SendIcon />}
                onClick={() => toggleContactModal(post.contactInfo)}
              >
                지원하기
              </Button>
            </div>

            <h4 className="font-semibold mt-4">프로젝트 주제</h4>
            <p className="mt-2 text-gray-800">{post.projectTitle}</p>
            <h4 className="font-semibold mt-4">모집 분야</h4>
            <p className="mt-2 text-gray-800">{post.recruitmentField}</p>

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
                <p className="mt-2 text-gray-800">{post.online}</p>
                <h4 className="font-semibold mt-4">프로젝트 기간</h4>
                <p className="mt-2 text-gray-800">{post.projectPeriod}</p>
                <h4 className="font-semibold mt-4">주요 내용</h4>
                <p className="mt-2 text-gray-800">{post.projectDescription}</p>
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
              src={post.imageUrl}
              alt="Project"
              className="h-60 mt-4 w-full rounded-lg"
            />

            <div className="mt-4">
              <div className="mt-4 flex justify-between">
                <IconButton
                  sx={{ color: "gray" }}
                  onClick={() => toggleComments(post.id)}
                >
                  <FaRegComment />
                </IconButton>
                <IconButton color="secondary">
                  <FaRegBookmark />
                </IconButton>
              </div>

              {showComments[post.id] && (
                <div className="mt-4 border-t border-gray-200 pt-4">
                  <input
                    type="text"
                    value={commentText}
                    onChange={handleCommentChange}
                    placeholder="Write your comment..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-2"
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleSubmitComment(post.id)}
                    className="ml-2 mt-2"
                  >
                    Submit
                  </Button>
                  {comments.length > 0 && (
                    <div className="mt-4">
                      <h4 className="font-semibold">Comments</h4>
                      {comments.map((comment) => (
                        <div key={comment.id} className="flex items-start mt-2">
                          <Avatar
                            src="https://i.pinimg.com/originals/a7/ee/b8/a7eeb85a1d27390ebdf770f8cf31e434.jpg"
                            alt="Avatar"
                          />
                          <div className="ml-3">
                            <p className="text-sm text-gray-600">
                              {format(comment.timestamp, "yyyy-MM-dd HH:mm")}
                            </p>
                            <p className="mt-1">{comment.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}

      <Modal open={isModalOpen} onClose={toggleModal}>
        <PostModal onClose={toggleModal} />
      </Modal>

      <Modal open={contactModalOpen} onClose={() => setContactModalOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <h2>Contact Information</h2>
          <p>You can contact the project owner via the following link:</p>
          <a href={contactInfo} target="_blank" rel="noopener noreferrer">
            {contactInfo}
          </a>
        </Box>
      </Modal>
    </section>
  );
};

export default MainContent;
