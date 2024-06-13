import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography, Button, TextField, Avatar } from '@mui/material';
import Header from '../components/Header';

const Mypage: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <>
      <Header value={2} onChange={handleTabChange} />
      <Box sx={{ width: '100%', maxWidth: '1200px', mx: 'auto', mt: 4 }}>
        <Tabs value={tabValue} onChange={handleTabChange} centered>
          <Tab label="개인정보" />
          <Tab label="내프로젝트" />
          <Tab label="내활동관리" />
        </Tabs>

        <TabPanel value={tabValue} index={0}>
          <PersonalInfo />
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <MyProjects />
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          <MyActivity />
        </TabPanel>
      </Box>
    </>
  );
};

interface TabPanelProps {
  children?: React.ReactNode;
  value: number;
  index: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

const PersonalInfo: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
      <Avatar
        alt="Profile Picture"
        src="https://i.pinimg.com/originals/a7/ee/b8/a7eeb85a1d27390ebdf770f8cf31e434.jpg"
        sx={{ width: 100, height: 100 }}
      />
      <TextField label="이름" defaultValue="홍길동" variant="outlined" fullWidth sx={{ maxWidth: 500 }} />
      <TextField label="관심분야" defaultValue="프로그래밍, 인공지능" variant="outlined" fullWidth sx={{ maxWidth: 500 }} />
      <Button variant="contained" color="error">
        회원 탈퇴
      </Button>
    </Box>
  );
};

const MyProjects: React.FC = () => {
  const projects = [
    { id: 1, name: '프로젝트 A', type: '프로젝트', description: 'AI 기반 데이터 분석' },
    { id: 2, name: '스터디 B', type: '스터디', description: '리액트 스터디' },
    { id: 3, name: '프로젝트 C', type: '프로젝트', description: '웹 개발 프로젝트' },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {projects.map((project) => (
        <Box key={project.id} sx={{ border: '1px solid #ccc', p: 2, borderRadius: 2 }}>
          <Typography variant="h6">{project.name}</Typography>
          <Typography variant="body2">{project.type}</Typography>
          <Typography variant="body1">{project.description}</Typography>
          {project.type === '프로젝트' && (
            <Button variant="contained" sx={{ mt: 1 }}>
              홍보하기
            </Button>
          )}
        </Box>
      ))}
    </Box>
  );
};

const MyActivity: React.FC = () => {
  const posts = [
    { id: 1, title: '첫 번째 게시물', date: '2023-06-12' },
    { id: 2, title: '두 번째 게시물', date: '2023-06-13' },
  ];

  const savedFeeds = [
    { id: 1, title: '유용한 글 모음', date: '2023-06-10' },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6">내가 작성한 게시물</Typography>
      {posts.map((post) => (
        <Box key={post.id} sx={{ border: '1px solid #ccc', p: 2, borderRadius: 2 }}>
          <Typography variant="body1">{post.title}</Typography>
          <Typography variant="body2">{post.date}</Typography>
        </Box>
      ))}
      <Typography variant="h6" sx={{ mt: 4 }}>저장한 피드</Typography>
      {savedFeeds.map((feed) => (
        <Box key={feed.id} sx={{ border: '1px solid #ccc', p: 2, borderRadius: 2 }}>
          <Typography variant="body1">{feed.title}</Typography>
          <Typography variant="body2">{feed.date}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Mypage;
