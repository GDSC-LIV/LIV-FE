import React, { useState } from 'react';
import Header from '../components/Header';
import Profile from '../components/mypage/Profile';
import MyProjects from '../components/mypage//Myproject';
import MyActivity from '../components/mypage/MyActivity';
import { Box, Tabs, Tab } from '@mui/material';
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

const Mypage: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <>
      <Header value={2} onChange={handleTabChange} />
      <Box sx={{ width: '100%', maxWidth: '1200px', mx: 'auto', mt: 4, paddingTop:10}}>
        <Tabs value={tabValue} onChange={handleTabChange} centered>
          <Tab label="개인정보" />
          <Tab label="내프로젝트" />
          <Tab label="내활동관리" />
        </Tabs>

        <TabPanel value={tabValue} index={0}>
          <Profile />
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

export default Mypage;