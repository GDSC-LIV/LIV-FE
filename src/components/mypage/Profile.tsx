import React, { useState } from 'react';
import { IoCameraOutline, IoSaveOutline } from 'react-icons/io5';
import { Box, Avatar, TextField, IconButton, Chip } from '@mui/material';

const techOptions = [
  'JavaScript', 'TypeScript', 'React', 'Vue', 'Node.js', 'Spring', 'Java',
  'Next.js', 'NestJS', 'Express', 'Go', 'C', 'Python', 'Django', 'Swift', 'Kotlin',
  'MySQL', 'MongoDB', 'PHP', 'GraphQL', 'Firebase', 'React Native', 'Unity', 'Flutter',
  'AWS', 'Kubernetes', 'Docker', 'Git', 'Figma'
];

const Profile: React.FC = () => {
  const [name, setName] = useState('홍길동');
  const [interests, setInterests] = useState('프로그래밍, 인공지능');
  const [profilePic, setProfilePic] = useState('https://i.pinimg.com/originals/a7/ee/b8/a7eeb85a1d27390ebdf770f8cf31e434.jpg');
  const [techStack, setTechStack] = useState<string[]>([]);
  const [githubLink, setGithubLink] = useState('');

  const handleProfilePicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setProfilePic(reader.result as string);
        }
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleAddTech = (event: React.ChangeEvent<{}>, value: string[]) => {
    setTechStack(value);
  };

  const handleSaveChanges = () => {
    console.log('Saved changes:', { name, interests, techStack, githubLink });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center' }}>
      <Box sx={{ position: 'relative' }}>
        <Avatar alt="Profile Picture" src={profilePic} sx={{ width: 100, height: 100 }} />
        <input
          accept="image/*"
          id="upload-photo"
          type="file"
          style={{ display: 'none' }}
          onChange={handleProfilePicChange}
        />
        <label htmlFor="upload-photo">
          <IconButton component="span" sx={{ position: 'absolute', bottom: 0, right: 0 }}>
            <IoCameraOutline />
          </IconButton>
        </label>
      </Box>
      <TextField
        label="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
        variant="outlined"
        fullWidth
        sx={{ maxWidth: 500 }}
      />
      <TextField
        label="관심분야"
        value={interests}
        onChange={(e) => setInterests(e.target.value)}
        variant="outlined"
        fullWidth
        sx={{ maxWidth: 500 }}
      />
      <TextField
        label="GitHub 링크"
        value={githubLink}
        onChange={(e) => setGithubLink(e.target.value)}
        variant="outlined"
        fullWidth
        sx={{ maxWidth: 500 }}
      />
      <button className="btn btn-primary mt-4 flex items-center">
        <IoSaveOutline className="mr-2" /> 저장하기
      </button>
    </Box>
  );
};

export default Profile;
