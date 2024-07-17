import React, { useState } from 'react';
import { Box, Grid, Typography, Button, Avatar, Chip, Dialog, DialogActions, DialogContent, DialogTitle, TextField, IconButton } from '@mui/material';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import { IoTrashOutline } from 'react-icons/io5';

interface Post {
  id: number;
  title: string;
  description: string;
  date: string;
  imgSrc: string;
  techStack: string[];
}

const posts: Post[] = [
  { id: 1, title: '첫 번째 게시물', description: '게시물 내용 1', date: '2023-06-12', imgSrc: 'https://via.placeholder.com/150', techStack: ['React', 'JavaScript'] },
  { id: 2, title: '두 번째 게시물', description: '게시물 내용 2', date: '2023-06-13', imgSrc: 'https://via.placeholder.com/150', techStack: ['Node.js', 'Express'] },
];

const savedFeeds: Post[] = [
  { id: 1, title: '유용한 글 모음', description: '글 모음 내용', date: '2023-06-10', imgSrc: 'https://via.placeholder.com/150', techStack: ['Python', 'Django'] },
];

const MyActivity: React.FC = () => {
  const [view, setView] = useState('posts');
  const [open, setOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [newMember, setNewMember] = useState('');
  const [members, setMembers] = useState<{ [key: number]: string[] }>({
    1: ['John Doe', 'Jane Smith'],
    2: ['Alice Johnson'],
  });

  const handleViewChange = (event: React.MouseEvent<HTMLElement>, newView: string) => {
    if (newView !== null) {
      setView(newView);
    }
  };

  const handleOpen = (post: Post) => {
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
              label="팀원 이메일"
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
                    <IoTrashOutline />
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

export default MyActivity;
