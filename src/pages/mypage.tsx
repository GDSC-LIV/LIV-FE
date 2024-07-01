import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography, Button, TextField, Avatar, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Chip, ToggleButtonGroup, ToggleButton, IconButton } from '@mui/material';
import Header from '../components/Header';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import GitHubIcon from '@mui/icons-material/GitHub';
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

const techOptions = [
  'JavaScript', 'TypeScript', 'React', 'Vue', 'Node.js', 'Spring', 'Java',
  'Next.js', 'NestJS', 'Express', 'Go', 'C', 'Python', 'Django', 'Swift', 'Kotlin',
  'MySQL', 'MongoDB', 'PHP', 'GraphQL', 'Firebase', 'React Native', 'Unity', 'Flutter',
  'AWS', 'Kubernetes', 'Docker', 'Git', 'Figma'
];

const PersonalInfo: React.FC = () => {
  const [name, setName] = useState('홍길동');
  const [interests, setInterests] = useState('프로그래밍, 인공지능');
  const [profilePic, setProfilePic] = useState('https://i.pinimg.com/originals/a7/ee/b8/a7eeb85a1d27390ebdf770f8cf31e434.jpg');
  const [techStack, setTechStack] = useState<string[]>([]);
  const [newTech, setNewTech] = useState('');
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
    // Handle save changes logic
    console.log('Saved changes:', { name, interests, techStack });
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
            <PhotoCamera />
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
      <Stack spacing={3} sx={{ width: 500 }}>
        <Autocomplete
          multiple
          id="tech-stack"
          options={techOptions}
          getOptionLabel={(option) => option}
          value={techStack}
          onChange={handleAddTech}
          renderTags={(value: readonly string[], getTagProps) =>
            value.map((option: string, index: number) => (
              <Chip variant="outlined" label={option} {...getTagProps({ index })} key={option} />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="기술 스택"
              placeholder="기술을 입력하세요"
            />
          )}
        />
      </Stack>
      <TextField
        label="GitHub 링크"
        value={githubLink}
        onChange={(e) => setGithubLink(e.target.value)}
        variant="outlined"
        fullWidth
        sx={{ maxWidth: 500 }}
        InputProps={{
          endAdornment: (
            <IconButton
              edge="end"
              aria-label="github-link"
              onClick={handleSaveChanges}
            >
              <GitHubIcon />
            </IconButton>
          ),
        }}
      />

      <Button variant="contained" color="primary" onClick={handleSaveChanges}>
        저장하기
      </Button>
      {/* <button className=" text-gray-500 underline py-2 px-4 text-lg">
        회원 탈퇴
    </button> */}
    </Box>
  );
};

const MyProjects: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<{ id: number, name: string } | null>(null);
  const [distributionAddress, setDistributionAddress] = useState('');

  const projects = [
    { id: 1, name: '프로젝트 A', type: '프로젝트', description: 'AI 기반 데이터 분석', imgSrc: 'https://via.placeholder.com/150', techStack: ['Python', 'TensorFlow', 'Pandas'] },
    { id: 2, name: '스터디 B', type: '스터디', description: '리액트 스터디', imgSrc: 'https://via.placeholder.com/150', techStack: ['React', 'JavaScript', 'HTML'] },
    { id: 3, name: '프로젝트 C', type: '프로젝트', description: '웹 개발 프로젝트', imgSrc: 'https://via.placeholder.com/150', techStack: ['Node.js', 'Express', 'MongoDB'] },
    { id: 4, name: '프로젝트 D', type: '프로젝트', description: '모바일 앱 개발', imgSrc: 'https://via.placeholder.com/150', techStack: ['Flutter', 'Dart', 'Firebase'] },
    { id: 5, name: '프로젝트 E', type: '프로젝트', description: '데이터 시각화', imgSrc: 'https://via.placeholder.com/150', techStack: ['D3.js', 'JavaScript', 'CSS'] },
  ];

  const handleClickOpen = (project: { id: number, name: string }) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
    setDistributionAddress('');
  };

  const handlePromote = () => {
    // Handle promotion logic here
    console.log(`Promoting ${selectedProject?.name} with address: ${distributionAddress}`);
    handleClose();
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Grid container spacing={2}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={3} key={project.id}>
            <Box sx={{ border: '1px solid #ccc', p: 2, borderRadius: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
              <Avatar
                alt={project.name}
                src={project.imgSrc}
                sx={{ width: '100%', height: 150, mb: 2, borderRadius: 2 }}
              />
              <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h6">{project.name}</Typography>
                  {project.type === '프로젝트' && (
                    <Button variant="contained" onClick={() => handleClickOpen(project)}>
                      홍보하기
                    </Button>
                  )}
                </Box>
                <Typography variant="body2">{project.type}</Typography>
                <Typography variant="body1">{project.description}</Typography>
                <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {project.techStack.map((tech, index) => (
                    <Chip key={index} label={tech} size="small" />
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>홍보하기</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="배포주소"
            type="url"
            fullWidth
            variant="outlined"
            value={distributionAddress}
            onChange={(e) => setDistributionAddress(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            취소
          </Button>
          <Button onClick={handlePromote} color="primary">
            홍보하기
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

const MyActivity: React.FC = () => {
  const [view, setView] = useState('posts');
  const [open, setOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<{ id: number, title: string } | null>(null);
  const [newMember, setNewMember] = useState('');
  const [members, setMembers] = useState<{ [key: number]: string[] }>({
    1: ['John Doe', 'Jane Smith'],
    2: ['Alice Johnson'],
  });

  const posts = [
    { id: 1, title: '첫 번째 게시물', description: '게시물 내용 1', date: '2023-06-12', imgSrc: 'https://via.placeholder.com/150', techStack: ['React', 'JavaScript'] },
    { id: 2, title: '두 번째 게시물', description: '게시물 내용 2', date: '2023-06-13', imgSrc: 'https://via.placeholder.com/150', techStack: ['Node.js', 'Express'] },
  ];

  const savedFeeds = [
    { id: 1, title: '유용한 글 모음', description: '글 모음 내용', date: '2023-06-10', imgSrc: 'https://via.placeholder.com/150', techStack: ['Python', 'Django'] },
  ];

  const handleViewChange = (event: React.MouseEvent<HTMLElement>, newView: string) => {
    if (newView !== null) {
      setView(newView);
    }
  };

  const handleOpen = (post: { id: number, title: string }) => {
    setSelectedPost(post);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPost(null);
    setNewMember('');
  };

  const handleAddMember = () => {
    if (selectedPost) {
      setMembers((prev) => ({
        ...prev,
        [selectedPost.id]: [...(prev[selectedPost.id] || []), newMember],
      }));
      setNewMember('');
    }
  };

  const handleRemoveMember = (memberToRemove: string) => {
    if (selectedPost) {
      setMembers((prev) => ({
        ...prev,
        [selectedPost.id]: prev[selectedPost.id].filter((member) => member !== memberToRemove),
      }));
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <ToggleButtonGroup
        value={view}
        exclusive
        onChange={handleViewChange}
        aria-label="view selection"
        sx={{ alignSelf: 'center', mb: 2 }}
      >
        <ToggleButton value="posts" aria-label="posts">
          내가 작성한 게시물
        </ToggleButton>
        <ToggleButton value="savedFeeds" aria-label="saved feeds">
          스크랩한 게시물
        </ToggleButton>
      </ToggleButtonGroup>

      {view === 'posts' && (
        <Grid container spacing={2}>
          {posts.map((post) => (
            <Grid item xs={12} sm={6} md={3} key={post.id}>
              <Box sx={{ border: '1px solid #ccc', p: 2, borderRadius: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <Avatar
                  alt={post.title}
                  src={post.imgSrc}
                  sx={{ width: '100%', height: 150, mb: 2, borderRadius: 2 }}
                />
                <Box>
                  <Typography variant="h6">{post.title}</Typography>
                  <Typography variant="body2">{post.date}</Typography>
                  <Typography variant="body1">{post.description}</Typography>
                  <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {post.techStack.map((tech, index) => (
                      <Chip key={index} label={tech} size="small" />
                    ))}
                  </Box>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2">팀원 목록:</Typography>
                    <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {members[post.id]?.map((member, index) => (
                        <Chip
                          key={index}
                          label={member}
                          size="small"
                          onDelete={() => handleRemoveMember(member)}
                          deleteIcon={<DeleteIcon />}
                        />
                      ))}
                    </Box>
                    <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={() => handleOpen(post)}>
                      팀원 추가/삭제
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      )}

      {view === 'savedFeeds' && (
        <Grid container spacing={2}>
          {savedFeeds.map((feed) => (
            <Grid item xs={12} sm={6} md={3} key={feed.id}>
              <Box sx={{ border: '1px solid #ccc', p: 2, borderRadius: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <Avatar
                  alt={feed.title}
                  src={feed.imgSrc}
                  sx={{ width: '100%', height: 150, mb: 2, borderRadius: 2 }}
                />
                <Box>
                  <Typography variant="h6">{feed.title}</Typography>
                  <Typography variant="body2">{feed.date}</Typography>
                  <Typography variant="body1">{feed.description}</Typography>
                  <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {feed.techStack.map((tech, index) => (
                      <Chip key={index} label={tech} size="small" />
                    ))}
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      )}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>팀원 관리</DialogTitle>
        <DialogContent>
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
    <TextField
      label="팀원 이름"
      value={newMember}
      onChange={(e) => setNewMember(e.target.value)}
      variant="outlined"
      fullWidth
    />
    <Button variant="contained" color="primary" onClick={handleAddMember}>
      추가
    </Button>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      {selectedPost && members[selectedPost.id]?.map((member, index) => (
        <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography>{member}</Typography>
          <IconButton onClick={() => handleRemoveMember(member)} color="secondary">
            <DeleteIcon />
          </IconButton>
        </Box>
      ))}
    </Box>
  </Box>
</DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            닫기
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Mypage;
