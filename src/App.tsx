import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PeopleIcon from '@mui/icons-material/People';
import HomeIcon from '@mui/icons-material/Home';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PersonIcon from '@mui/icons-material/Person';
import './index.css';

const App: React.FC = () => {
  const [value, setValue] = useState(0);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen">
      <header className="w-full bg-white shadow-sm z-50 relative">
        <div className="max-w-6xl mx-auto flex items-center justify-between  relative">
          <div className="flex items-center space-x-4">
            <img
              src="https://store-images.s-microsoft.com/image/apps.31120.9007199266245564.44dc7699-748d-4c34-ba5e-d04eb48f7960.bc4172bd-63f0-455a-9acd-5457f44e4473?h=464"
              alt="LinkedIn Logo"
              className="w-10 h-10"
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
              onChange={handleChange}
              aria-label="icon label tabs example"
              sx={{
                '.MuiTab-root': {
                  minWidth: '70px',
                  padding: '12px 12px',
                  paddingBottom: '12px',
                  fontSize: '0.7rem',
                  '& .MuiTab-iconWrapper': {
                    fontSize: '1.4rem',
                  },
                },
              }}
            >
              <Tab icon={<HomeIcon />} label="Home" />
              <Tab icon={<PeopleIcon />} label="Network" />
              <Tab icon={<AccountTreeIcon />} label="Projects" />
              <Tab icon={<PersonIcon />} label="Mypage" />
              {/* <Tab icon={<FavoriteIcon />} label="Notices" /> */}
            </Tabs>
            <div className="relative">
              <img
                src="https://i.pinimg.com/originals/a7/ee/b8/a7eeb85a1d27390ebdf770f8cf31e434.jpg"
                alt="Profile"
                className="w-12 h-12 rounded-full cursor-pointer"
                onClick={toggleProfileMenu}
              />
              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg py-2 z-50">
                  <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                    로그인
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                    프로필 사진 수정
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                    로그아웃
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      <main className="flex w-full max-w-6xl mx-auto mt-4 space-x-4">
        <section className="w-2/3">
          <div className="flex bg-white p-4 shadow-sm rounded-lg">
            <img
              src="https://i.pinimg.com/originals/a7/ee/b8/a7eeb85a1d27390ebdf770f8cf31e434.jpg"
              alt="Profile"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div className="flex-grow">
              <textarea
                placeholder="What's on your mind?"
                className="w-full border border-gray-300 rounded-lg p-4"
              ></textarea>
              <div className="flex justify-between mt-2">
                <button className="text-blue-500">Photo</button>
                <button className="text-blue-500">전송</button>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 shadow-sm rounded-lg mt-4">
            <div className="flex items-center space-x-4">
              <img
                src="https://i.pinimg.com/originals/a7/ee/b8/a7eeb85a1d27390ebdf770f8cf31e434.jpg"
                alt="Profile"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-semibold">Theresa Steward</h3>
                <p className="text-gray-600">iOS developer</p>
              </div>
            </div>
            <p className="mt-4 text-gray-800">
              What did the Dursleys care if Harry lost his place on the House
              Quidditch team because he hadn’t practiced all summer? What was it
              to the Dursleys if Harry went back to school without any of his
              homework done? The Dursleys were what wizards called Muggles (not
              a drop of magical blood in their veins).
            </p>
            <button className="text-blue-500">Read More</button>
            <div className="flex justify-between items-center mt-4 border-t pt-2">
              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 text-gray-600">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 9l-5 5-5-5"
                    ></path>
                  </svg>
                  <span>42</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 9l-5 5-5-5"
                    ></path>
                  </svg>
                  <span>9</span>
                </button>
              </div>
              <button className="flex items-center space-x-2 text-gray-600">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 9l-5 5-5-5"
                  ></path>
                </svg>
                <span>Share</span>
              </button>
            </div>
          </div>
        </section>
        <aside className="w-1/4 flex flex-col space-y-4">
          <div className="relative bg-white shadow-sm rounded-lg overflow-hidden">
            <img
              src="src/profile_bg.png"
              alt="Background"
              className="w-full h-32 object-cover"
            />
            <div className="flex flex-col items-center p-4">
              <img
                src="https://i.pinimg.com/originals/a7/ee/b8/a7eeb85a1d27390ebdf770f8cf31e434.jpg"
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-white -mt-12"
              />
              <h2 className="mt-4 font-semibold">Dmitry Kargaev</h2>
              <p className="text-gray-600">Freelance UX/UI designer</p>
              <p className="text-gray-600">
                80+ projects in web design, mobile apps (iOS & android) and
                creative projects. Open to offers.
              </p>
            </div>
          </div>
          <div className="bg-white p-4 shadow-sm rounded-lg">
            <div className="mt-4">
              <h3 className="font-semibold mb-4">My Groups</h3>
              <div className="mb-4">
                <h4 className="font-semibold">해시태그</h4>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold">트렌드기사</h4>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default App;
