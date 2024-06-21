import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

interface ProfileModalProps {
  open: boolean;
  onClose: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="profile-modal-title"
      aria-describedby="profile-modal-description"
      BackdropProps={{
        style: { backgroundColor: 'rgba(0, 0, 0, 0.5)' }, // 어두운 반투명 배경
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%', // 상대적 위치 조정
          left: '50%',
          transform: 'translate(-50%, -50%)', // 중앙 정렬
          width: 300, // 조정된 너비
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="src/profile_bg.png"
            alt="Background"
            className="w-full h-24 object-cover"
          />
          <div className="flex flex-col items-center py-4">
            <img
              src="https://i.pinimg.com/originals/a7/ee/b8/a7eeb85a1d27390ebdf770f8cf31e434.jpg"
              alt="Profile"
              className="w-28 h-28 rounded-full border-4 border-white -mt-14"
            />
            <h2 className="mt-4 font-semibold">Username</h2>
            <p className="text-gray-600">Frontend developer</p>
            <p className="text-gray-600">Gold II <a href="https://github.com/">https://github.com/</a></p>
          </div>
          <div className="absolute top-0 right-0">
            <IconButton onClick={onClose} className="p-2">
              <CloseIcon />
            </IconButton>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default ProfileModal;
