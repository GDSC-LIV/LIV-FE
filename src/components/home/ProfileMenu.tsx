import React from 'react';

const ProfileMenu: React.FC = () => {
  return (
    <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg py-2 z-50">
      <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
        로그인
      </button>
      <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
        프로필 수정
      </button>
      <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
        로그아웃
      </button>
    </div>
  );
};

export default ProfileMenu;
