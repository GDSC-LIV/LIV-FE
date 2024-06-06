import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

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
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        <h2 id="profile-modal-title">User Profile</h2>
        <p id="profile-modal-description">
          <strong>Interests:</strong> Web Development, AI, Machine Learning<br/>
          <strong>Technology Stack:</strong> React, Node.js, Python<br/>
          <strong>Baekjoon Tier:</strong> Gold II
        </p>
      </Box>
    </Modal>
  );
};

export default ProfileModal;
