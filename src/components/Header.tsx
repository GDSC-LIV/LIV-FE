import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PersonIcon from '@mui/icons-material/Person';
import ProfileMenu from '../components/home/ProfileMenu';

interface HeaderProps {
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const Header: React.FC<HeaderProps> = ({ value, onChange }) => {
  const navigate = useNavigate();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    onChange(event, newValue);

    // 페이지 이동 처리
    if (newValue === 0) {
      navigate('/');
    } else if (newValue === 1) {
      navigate('/project');
    } else if (newValue === 2) {
      navigate('/mypage'); // 마이페이지 라우트를 추가하려는 경우
    }
  };

  return (
    <header className="w-full bg-white shadow-sm z-50 relative">
      <div className="max-w-6xl mx-auto flex items-center justify-between relative">
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/150?text=LIV"
            alt="LIV Logo"
            className="w-10 h-10 cursor-pointer"
            onClick={() => navigate('/')}
          />
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-full px-4 py-2"
          />
        </div>
        <div className="flex items-center space-x-6">
          <Tabs
            value={value}
            onChange={handleTabChange}
            aria-label="icon label tabs example"
            sx={{
              ".MuiTab-root": {
                minWidth: "70px",
                padding: "12px 12px",
                paddingBottom: "12px",
                fontSize: "0.7rem",
                "& .MuiTab-iconWrapper": {
                  fontSize: "1.4rem",
                },
              },
            }}
          >
            <Tab icon={<HomeIcon />} label="Home" />
            <Tab icon={<AccountTreeIcon />} label="Projects" />
            <Tab icon={<PersonIcon />} label="Mypage" />
          </Tabs>
          <div className="relative">
            <img
              src="https://i.pinimg.com/originals/a7/ee/b8/a7eeb85a1d27390ebdf770f8cf31e434.jpg"
              alt="Profile"
              className="w-12 h-12 rounded-full cursor-pointer"
              onClick={toggleProfileMenu}
            />
            {isProfileMenuOpen && <ProfileMenu />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
