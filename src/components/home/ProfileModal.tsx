import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

interface ProfileModalProps {
  open: boolean;
  onClose: () => void;
  position: { top: number, left: number };
}

const ProfileModal: React.FC<ProfileModalProps> = ({ open, onClose, position }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="profile-modal-title"
      aria-describedby="profile-modal-description"
      BackdropProps={{
        style: { backgroundColor: 'transparent' },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: position.top,
          left: position.left,
          width: 250,
          bgcolor: 'background.paper',
          boxShadow: 4,
          p: 4,
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <h2 id="profile-modal-title">User Profile</h2>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
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
