import React, { useState } from 'react';
import { FaGithub, FaTrashAlt } from 'react-icons/fa';
import Header from '../components/Header';
import './ProjectPage.css';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

type TeamMember = {
  id: number;
  name: string;
  role: string;
  stack: string;
  github: string;
  photo: string;
};

type ProjectData = {
  teamId: number;
  description: string;
};

type MeetingRecord = {
  date: string;
  content: string;
};

const ProjectPage: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    { id: 1, name: 'Alice', role: 'Developer', stack: 'React, Node.js', github: 'https://github.com/alice', photo: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Bob', role: 'Designer', stack: 'Figma, Sketch', github: 'https://github.com/bob', photo: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Charlie', role: 'Tester', stack: 'Jest, Cypress', github: 'https://github.com/charlie', photo: 'https://via.placeholder.com/150' },
    { id: 4, name: 'David', role: 'Manager', stack: 'Agile, Scrum', github: 'https://github.com/david', photo: 'https://via.placeholder.com/150' },
  ]);

  const [teamNames] = useState({ 1: 'Team 1', 2: 'Team 2' });
  const [projectData] = useState<ProjectData[]>([
    { teamId: 1, description: 'This is a description of project for Team 1.' },
    { teamId: 2, description: 'This is a description of project for Team 2.' },
  ]);

  const [meetingRecords, setMeetingRecords] = useState<{ [key: number]: MeetingRecord[] }>({
    1: [],
    2: [],
  });

  const [newMeeting, setNewMeeting] = useState<{ [key: number]: MeetingRecord }>({
    1: { date: '', content: '' },
    2: { date: '', content: '' },
  });

  const [memos, setMemos] = useState<{ [key: number]: string }>({
    1: '',
    2: '',
  });

  const handleMeetingChange = (teamId: number, field: string, value: string) => {
    setNewMeeting({
      ...newMeeting,
      [teamId]: { ...newMeeting[teamId], [field]: value },
    });
  };

  const handleSaveMeeting = (teamId: number) => {
    setMeetingRecords({
      ...meetingRecords,
      [teamId]: [...meetingRecords[teamId], newMeeting[teamId]].sort((a, b) => (a.date > b.date ? 1 : -1)),
    });
    setNewMeeting({ ...newMeeting, [teamId]: { date: '', content: '' } });
  };

  const handleRemoveMember = (id: number) => {
    setTeamMembers(teamMembers.filter((member) => member.id !== id));
  };

  const handleMemoChange = (teamId: number, value: string) => {
    setMemos({ ...memos, [teamId]: value });
  };

  const handleSaveMemo = (teamId: number) => {
    alert(`Memo saved for Team ${teamId}`);
  };

  return (
    <div style={{ backgroundColor: '#f4f4f8', minHeight: '100vh' }}>
      <Header value={1} onChange={() => {}} />
      <div className="project-page">
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', paddingRight: 32, paddingLeft: 32 }}>
          {Object.entries(teamNames).map(([id, name], index) => (
            <Accordion key={id} defaultExpanded={index === 0}>
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls={`panel${id}-content`}
                id={`panel${id}-header`}
              >
                <Typography>{name}</Typography>
              </AccordionSummary>
              <AccordionDetails style={{ backgroundColor: 'white' }}>
                <div className="project-description">
                  <Typography variant="body1">
                    {projectData.find((project) => project.teamId === Number(id))?.description}
                  </Typography>
                </div>
                <div className="team-section">
                  <h2>{name} Members</h2>
                  <Grid container spacing={2}>
                    {teamMembers.map((member) => (
                      <Grid item xs={12} sm={6} md={3} key={member.id}>
                        <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
                          <Grid container spacing={2} alignItems="center">
                            <Grid item>
                              <Avatar src={member.photo} alt={member.name} />
                            </Grid>
                            <Grid item xs>
                              <Typography variant="h6">{member.name}</Typography>
                              <Typography variant="body2">Role: {member.role}</Typography>
                              <Typography variant="body2">Stack: {member.stack}</Typography>
                    
                            </Grid>
                            <Grid item>
                            <a href={member.github} target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                              </a>
                            </Grid>
                          </Grid>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                </div>
                <div className="meeting-section">
                  <h3>회의내용</h3>
                  {meetingRecords[Number(id)].map((record, index) => (
                    <Accordion key={index}>
                      <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls={`panel${id}-content-${index}`}
                        id={`panel${id}-header-${index}`}
                      >
                        <Typography variant="body2">{record.date}</Typography>
                      </AccordionSummary>
                      <AccordionDetails style={{ backgroundColor: 'white' }}>
                        <Typography variant="body1">{record.content}</Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                  <TextField
  fullWidth
  label="Date"
  type="date"
  value={newMeeting[Number(id)].date}
  onChange={(e) => handleMeetingChange(Number(id), 'date', e.target.value)}
  margin="normal"
  sx={{ width: '20%' }} // Adjust width as needed
/>

                  <TextField
                    fullWidth
                    label="Meeting Content"
                    multiline
                    rows={4}
                    value={newMeeting[Number(id)].content}
                    onChange={(e) => handleMeetingChange(Number(id), 'content', e.target.value)}
                    margin="normal"
                  />
                  <Button variant="contained" color="primary" onClick={() => handleSaveMeeting(Number(id))}>
                    저장하기
                  </Button>
                </div>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </div>
    </div>
  );
};

export default ProjectPage;
