import React, { useState } from 'react';
import { Box, Avatar, Grid, Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Chip } from '@mui/material';

interface Project {
  id: number;
  name: string;
  description: string;
  imgSrc: string;
  techStack: string[];
  type: string;
}

const projects: Project[] = [
  { id: 1, name: '프로젝트 A', type: '프로젝트', description: 'AI 기반 데이터 분석', imgSrc: 'https://via.placeholder.com/150', techStack: ['Python', 'TensorFlow', 'Pandas'] },
  { id: 2, name: '스터디 B', type: '스터디', description: '리액트 스터디', imgSrc: 'https://via.placeholder.com/150', techStack: ['React', 'JavaScript', 'HTML'] },
  { id: 3, name: '프로젝트 C', type: '프로젝트', description: '웹 개발 프로젝트', imgSrc: 'https://via.placeholder.com/150', techStack: ['Node.js', 'Express', 'MongoDB'] },
  { id: 4, name: '프로젝트 D', type: '프로젝트', description: '모바일 앱 개발', imgSrc: 'https://via.placeholder.com/150', techStack: ['Flutter', 'Dart', 'Firebase'] },
  { id: 5, name: '프로젝트 E', type: '프로젝트', description: '데이터 시각화', imgSrc: 'https://via.placeholder.com/150', techStack: ['D3.js', 'JavaScript', 'CSS'] },
];

const MyProjects: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [distributionAddress, setDistributionAddress] = useState('');

  const handleClickOpen = (project: Project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
    setDistributionAddress('');
  };

  const handlePromote = () => {
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

export default MyProjects;
