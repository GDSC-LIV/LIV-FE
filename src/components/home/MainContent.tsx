import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import Modal from "@mui/material/Modal";
import PostModal from "../home/PostModal";
import ProfileModal from "../home/ProfileModal";
import Avatar from "@mui/material/Avatar";
import { format } from "date-fns";
import { IconButton } from "@mui/material";
import { FaRegComment, FaRegBookmark } from "react-icons/fa";
import CloseIcon from "@mui/icons-material/Close";

const MainContent: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("RECRUIT");
  const [posts, setPosts] = useState<any[]>([]);
  const [showMore, setShowMore] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [profileModalPosition, setProfileModalPosition] = useState<{
    top: number;
    left: number;
  }>({ top: 0, left: 0 });
  const [showComments, setShowComments] = useState<{ [key: number]: boolean }>(
    {}
  );
  const [commentText, setCommentText] = useState<string>("");
  const [comments, setComments] = useState<
    { id: number; text: string; timestamp: Date }[]
  >([]);
  const [nextCommentId, setNextCommentId] = useState<number>(1);
  const [contactModalOpen, setContactModalOpen] = useState<boolean>(false);
  const [contact, setcontact] = useState<string>("");

  const profileRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`/posts?type=${selectedCategory}`);
        if (response.data.isSuccess) {
          setPosts(response.data.data);
          console.log(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [selectedCategory]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleProfileModal = () => {
    if (profileRef.current) {
      const rect = profileRef.current.getBoundingClientRect();
      setProfileModalPosition({
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX - 300,
      });
    }
    setProfileModalOpen(!profileModalOpen);
  };

  const handleCategoryChange = (
    event: React.SyntheticEvent,
    newValue: string
  ) => {
    setSelectedCategory(newValue);
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const toggleComments = (postId: number) => {
    setShowComments((prev) => ({ ...prev, [postId]: !prev[postId] }));
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentText(event.target.value);
  };
  const handleDeleteComment = (postId: number, commentId: number) => {
    const updatedComments = comments.filter(
      (comment) => comment.id !== commentId
    );
    setComments(updatedComments);
  };

  const handleSubmitComment = (postId: number) => {
    if (commentText.trim() !== "") {
      const newComment = {
        id: nextCommentId,
        text: commentText,
        timestamp: new Date(),
      };
      setComments([...comments, newComment]);
      setCommentText("");
      setNextCommentId(nextCommentId + 1);
    }
  };

  const toggleContactModal = (info: string) => {
    setcontact(info);
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
              <Tab label="Recruit" value="RECRUIT" />
              <Tab label="promotion" value="PROMOTION" />
              <Tab label="Recommend" value="RECOMMEND" />
            </TabList>
          </Box>
        </TabContext>
      </Box>

      {selectedCategory === "RECRUIT" &&
        posts.map((post) => (
          <div
            key={post.post_id}
            className="bg-white p-4 pr-8 pl-8 shadow-sm rounded-lg mt-4"
          >
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
                  <h3 className="font-semibold">{post.name} </h3>
                  <p className="text-gray-600">{post.role}</p>
                </div>
              </div>
              <Button
                variant="outlined"
                endIcon={<SendIcon />}
                onClick={() => toggleContactModal(post.contact)}
              >
                지원하기
              </Button>
            </div>

            <h4 className="font-semibold mt-4">프로젝트 주제</h4>
            <p className="mt-2 text-gray-800">{post.topic}</p>
            <h4 className="font-semibold mt-4">모집 분야</h4>
            <p className="mt-2 text-gray-800">{post.field}</p>

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
                <p className="mt-2 text-gray-800">
                  {post.is_online ? "온라인" : "오프라인"}
                </p>
                <h4 className="font-semibold mt-4">프로젝트 기간</h4>
                <p className="mt-2 text-gray-800">{post.duration}</p>
                <h4 className="font-semibold mt-4">주요 내용</h4>
                <p className="mt-2 text-gray-800">{post.content}</p>
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

            <div className="mt-4">
              <div className="mt-4 flex justify-between">
                <IconButton
                  sx={{ color: "gray" }}
                  onClick={() => toggleComments(post.post_id)}
                >
                  <FaRegComment />
                </IconButton>
                <IconButton>
                  <FaRegBookmark />
                </IconButton>
              </div>

              {showComments[post.post_id] && (
                <div className="mt-4 border-t border-gray-200 pt-4">
                  <div className="flex">
                    <input
                      type="text"
                      value={commentText}
                      onChange={handleCommentChange}
                      placeholder="Write your comment..."
                      className="flex-grow border border-gray-300 rounded-lg px-4 py-2 mt-2"
                    />
                    <Button
                      variant="text"
                      onClick={() => handleSubmitComment(post.post_id)}
                      className="ml-2 mt-2"
                    >
                      <SendIcon style={{ color: "black" }} />
                    </Button>
                  </div>
                  {comments.length > 0 && (
                    <div className="mt-4">
                      <h4 className="font-semibold">Comments</h4>
                      {comments.map((comment) => (
                        <div key={comment.id} className="flex items-start mt-2">
                          <Avatar
                            src="https://i.pinimg.com/originals/a7/ee/b8/a7eeb85a1d27390ebdf770f8cf31e434.jpg"
                            alt="Avatar"
                          />
                          <div className="flex-grow ml-3 flex justify-between">
                            <div>
                              <p className="text-sm text-gray-600">
                                {format(comment.timestamp, "yyyy-MM-dd HH:mm")}
                              </p>
                              <p className="mt-1">{comment.text}</p>
                            </div>
                            <IconButton
                              sx={{ color: "gray" }}
                              onClick={() =>
                                handleDeleteComment(post.post_id, comment.id)
                              }
                            >
                              <CloseIcon />
                            </IconButton>
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

      {selectedCategory === "PROMOTION" &&
        posts.map((post) => (
          <div
            key={post.post_id}
            className="bg-white p-4 shadow-sm rounded-lg mt-4"
          >
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
                <h3 className="font-semibold">{post.name}</h3>
                <p className="text-gray-600">{post.role}</p>
              </div>
            </div>

            <h4 className="font-semibold mt-4">프로젝트 주제</h4>
            <p className="mt-2 text-gray-800">{post.topic}</p>

            <img
              src="https://via.placeholder.com/200x100"
              alt="Project"
              className="h-60 mt-4 w-full rounded-lg"
            />
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
          {/* <p>You can contact the project owner via the following link:</p> */}
          <a href={contact} target="_blank" rel="noopener noreferrer">
            {contact}
          </a>
        </Box>
      </Modal>
    </section>
  );
};

export default MainContent;
