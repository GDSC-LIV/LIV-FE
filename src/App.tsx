import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const App = () => {
  const [sortOption, setSortOption] = useState('');

  const handleSortChange = (event: SelectChangeEvent) => {
    setSortOption(event.target.value);
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen">
      <header className="w-full bg-white shadow-sm z-50 relative">
        <div className="max-w-6xl mx-auto flex items-center justify-between relative">
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
          {/* Add your navigation and profile menu code here */}
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
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="sort-select-label">Sort By</InputLabel>
            <Select
              labelId="sort-select-label"
              id="sort-select"
              value={sortOption}
              onChange={handleSortChange}
              label="Sort By"
            >
              
              <MenuItem value="latest">최신순</MenuItem>
              <MenuItem value="recommended">추천순 </MenuItem>
            </Select>
          </FormControl>
          {sortOption === 'latest' ? (
            <div className="bg-white p-4 shadow-sm rounded-lg mt-4">
              {/* Latest posts content goes here */}
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
                What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer? What was it to the Dursleys if Harry went back to school without any of his homework done? The Dursleys were what wizards called Muggles (not a drop of magical blood in their veins).
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
          ) : (
            <div className="bg-white p-4 shadow-sm rounded-lg mt-4">
              {/* Recommended posts content goes here */}
              <div className="flex items-center space-x-4">
                <img
                  src="https://i.pinimg.com/originals/a7/ee/b8/a7eeb85a1d27390ebdf770f8cf31e434.jpg"
                  alt="Profile"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold">John Doe</h3>
                  <p className="text-gray-600">Backend developer</p>
                </div>
              </div>
              <p className="mt-4 text-gray-800">
                Recommended post content goes here...
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
          )}
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
              <p className="text-gray-600">Frontend developer</p>
              <p className="text-gray-600">
                Ruby II 
                https://github.com/
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
                <h4 className="font-semibold">트렌드기사&광고</h4>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default App;
