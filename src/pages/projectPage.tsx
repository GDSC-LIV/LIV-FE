import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { FaGithub, FaTrashAlt, FaUserPlus } from 'react-icons/fa';
import Header from '../components/Header';
import './ProjectPage.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const localizer = momentLocalizer(moment);

type TeamMember = {
  id: number;
  name: string;
  role: string;
  stack: string;
  github: string;
};

type Event = {
  title: string;
  start: Date;
  end: Date;
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
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
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const ProjectPage: React.FC = () => {
  const [value, setValue] = useState(0);
  const [events, setEvents] = useState<Event[]>([]);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    { id: 1, name: 'Alice', role: 'Developer', stack: 'React, Node.js', github: 'https://github.com/alice' },
    { id: 2, name: 'Bob', role: 'Designer', stack: 'Figma, Sketch', github: 'https://github.com/bob' },
  ]);

  const [newMember, setNewMember] = useState<TeamMember>({ id: 0, name: '', role: '', stack: '', github: '' });
  const [newEvent, setNewEvent] = useState<Event>({ title: '', start: new Date(), end: new Date() });

  const handleAddEvent = () => {
    setEvents([...events, newEvent]);
    setNewEvent({ title: '', start: new Date(), end: new Date() });
  };

  const handleAddMember = () => {
    setNewMember((prev) => ({ ...prev, id: teamMembers.length + 1 }));
    setTeamMembers([...teamMembers, newMember]);
    setNewMember({ id: 0, name: '', role: '', stack: '', github: '' });
  };

  const handleRemoveMember = (id: number) => {
    setTeamMembers(teamMembers.filter((member) => member.id !== id));
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Header value={1} onChange={() => {}} />
      <div className="project-page">
        {/* <h1>Project Management</h1> */}
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
            <Tab label="Team 1 Schedule" {...a11yProps(1)} />
            <Tab label="Team 2 Schedule" {...a11yProps(2)} />
            {/* <Tab label="Team Management" {...a11yProps(3)} /> */}
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
              <div className="add-event-form">
                <h3>Add Event</h3>
                <input
                  type="text"
                  placeholder="Event Title"
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                />
                <input
                  type="datetime-local"
                  value={moment(newEvent.start).format('YYYY-MM-DDTHH:mm')}
                  onChange={(e) => setNewEvent({ ...newEvent, start: new Date(e.target.value) })}
                />
                <input
                  type="datetime-local"
                  value={moment(newEvent.end).format('YYYY-MM-DDTHH:mm')}
                  onChange={(e) => setNewEvent({ ...newEvent, end: new Date(e.target.value) })}
                />
                <button onClick={handleAddEvent}>Add Event</button>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className="content">
              <div className="calendar-section">
                <Calendar
                  localizer={localizer}
                  events={events.filter(event => event.title.includes('Team 1'))}
                  startAccessor="start"
                  endAccessor="end"
                  style={{ height: 500 }}
                />
                <div className="add-event-form">
                  <h3>Add Event</h3>
                  <input
                    type="text"
                    placeholder="Event Title"
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value + ' Team 1' })}
                  />
                  <input
                    type="datetime-local"
                    value={moment(newEvent.start).format('YYYY-MM-DDTHH:mm')}
                    onChange={(e) => setNewEvent({ ...newEvent, start: new Date(e.target.value) })}
                  />
                  <input
                    type="datetime-local"
                    value={moment(newEvent.end).format('YYYY-MM-DDTHH:mm')}
                    onChange={(e) => setNewEvent({ ...newEvent, end: new Date(e.target.value) })}
                  />
                  <button onClick={handleAddEvent}>Add Event</button>
                </div>
              </div>
              <div className="team-section">
                <h2>Team Members</h2>
                <ul>
                  {teamMembers.map((member) => (
                    <li key={member.id}>
                      <p>{member.name}</p>
                      <p>Role: {member.role}</p>
                      <p>Stack: {member.stack}</p>
                      <a href={member.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                      </a>
                      <button onClick={() => handleRemoveMember(member.id)}>
                        <FaTrashAlt />
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="add-member-form">
                  <h3>Add Team Member</h3>
                  <input
                    type="text"
                    placeholder="Name"
                    value={newMember.name}
                    onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Role"
                    value={newMember.role}
                    onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Stack"
                    value={newMember.stack}
                    onChange={(e) => setNewMember({ ...newMember, stack: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="GitHub URL"
                    value={newMember.github}
                    onChange={(e) => setNewMember({ ...newMember, github: e.target.value })}
                  />
                  <button onClick={handleAddMember}>
                    <FaUserPlus /> Add Member
                  </button>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className="content">
              <div className="calendar-section">
                <Calendar
                  localizer={localizer}
                  events={events.filter(event => event.title.includes('Team 2'))}
                  startAccessor="start"
                  endAccessor="end"
                  style={{ height: 500 }}
                />
                <div className="add-event-form">
                  <h3>Add Event</h3>
                  <input
                    type="text"
                    placeholder="Event Title"
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value + ' Team 2' })}
                  />
                  <input
                    type="datetime-local"
                    value={moment(newEvent.start).format('YYYY-MM-DDTHH:mm')}
                    onChange={(e) => setNewEvent({ ...newEvent, start: new Date(e.target.value) })}
                  />
                  <input
                    type="datetime-local"
                    value={moment(newEvent.end).format('YYYY-MM-DDTHH:mm')}
                    onChange={(e) => setNewEvent({ ...newEvent, end: new Date(e.target.value) })}
                  />
                  <button onClick={handleAddEvent}>Add Event</button>
                </div>
              </div>
              <div className="team-section">
                <h2>Team Members</h2>
                <ul>
                  {teamMembers.map((member) => (
                    <li key={member.id}>
                      <p>{member.name}</p>
                      <p>Role: {member.role}</p>
                      <p>Stack: {member.stack}</p>
                      <a href={member.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                      </a>
                      <button onClick={() => handleRemoveMember(member.id)}>
                        <FaTrashAlt />
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="add-member-form">
                  <h3>Add Team Member</h3>
                  <input
                    type="text"
                    placeholder="Name"
                    value={newMember.name}
                    onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Role"
                    value={newMember.role}
                    onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Stack"
                    value={newMember.stack}
                    onChange={(e) => setNewMember({ ...newMember, stack: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="GitHub URL"
                    value={newMember.github}
                    onChange={(e) => setNewMember({ ...newMember, github: e.target.value })}
                  />
                  <button onClick={handleAddMember}>
                    <FaUserPlus /> Add Member
                  </button>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <div className="team-section">
              <h2>Team Members</h2>
              <ul>
                {teamMembers.map((member) => (
                  <li key={member.id}>
                    <p>{member.name}</p>
                    <p>Role: {member.role}</p>
                    <p>Stack: {member.stack}</p>
                    <a href={member.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                    <button onClick={() => handleRemoveMember(member.id)}>
                      <FaTrashAlt />
                    </button>
                  </li>
                ))}
              </ul>
              <div className="add-member-form">
                <h3>Add Team Member</h3>
                <input
                  type="text"
                  placeholder="Name"
                  value={newMember.name}
                  onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Role"
                  value={newMember.role}
                  onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Stack"
                  value={newMember.stack}
                  onChange={(e) => setNewMember({ ...newMember, stack: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="GitHub URL"
                  value={newMember.github}
                  onChange={(e) => setNewMember({ ...newMember, github: e.target.value })}
                />
                <button onClick={handleAddMember}>
                  <FaUserPlus /> Add Member
                </button>
              </div>
            </div>
          </TabPanel>
        </Box>
      </div>
    </div>
  );
};

export default ProjectPage;
