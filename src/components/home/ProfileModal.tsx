import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

interface ProfileModalProps {
  open: boolean;
  onClose: () => void;
}
const developmentStacks = [
  { title: "JavaScript", img: "https://skillicons.dev/icons?i=js&theme=light" },
  { title: "TypeScript", img: "https://skillicons.dev/icons?i=ts" },
  { title: "React", img: "https://skillicons.dev/icons?i=react&theme=light" },
  { title: "Vue", img: "https://skillicons.dev/icons?i=vue&theme=light" },
  {
    title: "Node.js",
    img: "https://skillicons.dev/icons?i=nodejs&theme=light",
  },
  { title: "Spring", img: "https://skillicons.dev/icons?i=spring&theme=light" },
  { title: "Java", img: "https://skillicons.dev/icons?i=java&theme=light" },
  {
    title: "Next.js",
    img: "https://skillicons.dev/icons?i=nextjs&theme=light",
  },
  { title: "Git", img: "https://skillicons.dev/icons?i=git&theme=light" },
  { title: "Figma", img: "https://skillicons.dev/icons?i=figma&theme=light" },
  { title: "Kubernetes", img: "https://skillicons.dev/icons?i=kubernetes" },
  { title: "Docker", img: "https://skillicons.dev/icons?i=docker" },
  // Additional stacks omitted for brevity...
];

const ProfileModal: React.FC<ProfileModalProps> = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="profile-modal-title"
      aria-describedby="profile-modal-description"
      BackdropProps={{
        style: { backgroundColor: 'rgba(0, 0, 0, 0.5)' } // Slightly darker backdrop
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600, // Increased width
          bgcolor: 'background.paper',
          boxShadow: 24,
          borderRadius: 2,
          p: 4, // Added padding
        }}
      >
        <div className="flex">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img
              src="https://i.pinimg.com/originals/a7/ee/b8/a7eeb85a1d27390ebdf770f8cf31e434.jpg"
              alt="Profile"
              className="w-28 h-28 rounded-full border-4 border-white"
            />
          </div>
          {/* User Information */}
          <div className="flex-grow ml-4">
            <h2 className="font-semibold">Username</h2>
            <p className="text-gray-600">Frontend developer</p>
            <p className="text-gray-600">Gold II</p>
            <a href="https://github.com/" className="text-blue-600">https://github.com/</a>
            <p className="mt-2">  블로그</p>
            <a href="https://exampleblog.com" className="text-blue-600">https://velog.io/</a>
            <p className="mt-2">  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an</p>
            {/* Tech Stack Icons or List */}
            <div className="flex flex-wrap  mt-4 space-x-2">
            {developmentStacks.map((stack, index) => (
              <img key={index} src={stack.img} alt={stack.title} title={stack.title} className="w-10 h-10" />
            ))}
          </div>
            <p className="mt-2">  (회원가입 시 퀴즈 결과 추가) </p>
          </div>
        </div>
        {/* Close Button */}
        <div className="absolute top-0 right-0">
          <IconButton onClick={onClose} className="p-2">
            <CloseIcon />
          </IconButton>
        </div>
      </Box>
    </Modal>
  );
};

export default ProfileModal;
