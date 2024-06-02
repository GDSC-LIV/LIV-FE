// src/App.tsx
import React from 'react';
import './index.css';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen">
      <header className="w-full bg-white shadow-sm p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/150"
            alt="LinkedIn Logo"
            className="w-8 h-8"
          />
          <nav className="flex space-x-4">
            <a href="#" className="text-gray-700">Feed</a>
            <a href="#" className="text-gray-700">Network</a>
            <a href="#" className="text-gray-700">Jobs</a>
            <a href="#" className="text-gray-700">Chat</a>
            <a href="#" className="text-gray-700">Notices</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-full px-4 py-2"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
            Other
          </button>
        </div>
      </header>
      <main className="flex w-full max-w-6xl mt-4 space-x-4">
        <section className="w-2/3">
          <div className="bg-white p-4 shadow-sm rounded-lg">
            <textarea
              placeholder="What's on your mind?"
              className="w-full border border-gray-300 rounded-lg p-4"
            ></textarea>
            <div className="flex justify-between mt-2">
              <button className="text-blue-500">Photo</button>
            </div>
          </div>
          <div className="bg-white p-4 shadow-sm rounded-lg mt-4">
            <div className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/50"
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
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 9l-5 5-5-5"></path>
                  </svg>
                  <span>42</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 9l-5 5-5-5"></path>
                  </svg>
                  <span>9</span>
                </button>
              </div>
              <button className="flex items-center space-x-2 text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 9l-5 5-5-5"></path>
                </svg>
                <span>Share</span>
              </button>
            </div>
          </div>
        </section>
        <aside className="w-1/3 flex flex-col space-y-4">
          <div className="bg-white p-4 shadow-sm rounded-lg">
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/100"
                alt="Profile"
                className="w-24 h-24 rounded-full"
              />
              <h2 className="mt-4 font-semibold">username</h2>
              <p className="text-gray-600">Freelance UX/UI designer</p>
              <p className="text-gray-600">소개 .</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full">
                asd
              </button>
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