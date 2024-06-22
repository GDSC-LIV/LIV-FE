import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { FaGithub, FaTrashAlt } from 'react-icons/fa';
import Header from '../components/Header';
import './ProjectPage.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const localizer = momentLocalizer(moment);

type TeamMember = {
  id: number;
  name: string;
  role: string;
  stack: string;
  github: string;
  photo: string;
};

type Event = {
  title: string;
  start: Date;
  end: Date;
  teamId: number;
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index: number) => ({
  id: `vertical-tab-${index}`,
  'aria-controls': `vertical-tabpanel-${index}`,
});

const ProjectPage: React.FC = () => {
  const [value, setValue] = useState(0);
  const [events, setEvents] = useState<Event[]>([]);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    { id: 1, name: 'Alice', role: 'Developer', stack: 'React, Node.js', github: 'https://github.com/alice', photo: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Bob', role: 'Designer', stack: 'Figma, Sketch', github: 'https://github.com/bob', photo: 'https://via.placeholder.com/150' },
  ]);

  const [teamNames, setTeamNames] = useState({ 1: 'Team 1', 2: 'Team 2' });
  const [newEvent, setNewEvent] = useState<Event>({ title: '', start: new Date(), end: new Date(), teamId: 0 });

  const handleAddEvent = (teamId: number) => {
    setEvents([...events, { ...newEvent, teamId }]);
    setNewEvent({ title: '', start: new Date(), end: new Date(), teamId: 0 });
  };

  const handleRemoveMember = (id: number) => {
    setTeamMembers(teamMembers.filter((member) => member.id !== id));
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleTeamNameChange = (teamId: number, name: string) => {
    setTeamNames({ ...teamNames, [teamId]: name });
  };

  const renderTeamMembers = (teamId: number) => {
    return teamMembers.map((member) => (
      <Paper key={member.id} elevation={3} sx={{ p: 2, mb: 2 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar src={member.photo} alt={member.name} />
          </Grid>
          <Grid item xs>
            <Typography variant="h6">{member.name}</Typography>
            <Typography variant="body2">Role: {member.role}</Typography>
            <Typography variant="body2">Stack: {member.stack}</Typography>
            <a href={member.github} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </Grid>
          <Grid item>
            <button onClick={() => handleRemoveMember(member.id)} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
              <FaTrashAlt />
            </button>
          </Grid>
        </Grid>
      </Paper>
    ));
  };

  const renderAddEventForm = (teamId: number) => (
    <div className="add-event-form">
      <h3>Add Event</h3>
      <TextField
        fullWidth
        label="Event Title"
        value={newEvent.title}
        onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Start Date"
        type="datetime-local"
        value={moment(newEvent.start).format('YYYY-MM-DDTHH:mm')}
        onChange={(e) => setNewEvent({ ...newEvent, start: new Date(e.target.value) })}
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        fullWidth
        label="End Date"
        type="datetime-local"
        value={moment(newEvent.end).format('YYYY-MM-DDTHH:mm')}
        onChange={(e) => setNewEvent({ ...newEvent, end: new Date(e.target.value) })}
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />
      <Button variant="contained" color="primary" onClick={() => handleAddEvent(teamId)} sx={{ mt: 2 }}>
        Add Event
      </Button>
    </div>
  );

  return (
    <div>
      <Header value={1} onChange={() => {}} />
      <div className="project-page">
        <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: 'divider' }}
          >
            <Tab label="All Teams Schedule" {...a11yProps(0)} />
            <Tab label={teamNames[1]} {...a11yProps(1)} />
            <Tab label={teamNames[2]} {...a11yProps(2)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <div className="calendar-section">
              <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
              />
              {renderAddEventForm(0)}
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <TextField
              fullWidth
              label="Team Name"
              value={teamNames[1]}
              onChange={(e) => handleTeamNameChange(1, e.target.value)}
              margin="normal"
            />
            <div className="calendar-section">
              <Calendar
                localizer={localizer}
                events={events.filter(event => event.teamId === 1)}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
              />
              {renderAddEventForm(1)}
              <div className="team-section">
                <h2>{teamNames[1]} Members</h2>
                {renderTeamMembers(1)}
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <TextField
              fullWidth
              label="Team Name"
              value={teamNames[2]}
              onChange={(e) => handleTeamNameChange(2, e.target.value)}
              margin="normal"
            />
            <div className="calendar-section">
              <Calendar
                localizer={localizer}
                events={events.filter(event => event.teamId === 2)}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
              />
              {renderAddEventForm(2)}
              <div className="team-section">
                <h2>{teamNames[2]} Members</h2>
                {renderTeamMembers(2)}
              </div>
            </div>
          </TabPanel>
        </Box>
      </div>
    </div>
  );
};

export default ProjectPage;
