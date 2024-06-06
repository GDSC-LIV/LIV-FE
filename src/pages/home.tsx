// import React, { useState } from 'react';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// // import PeopleIcon from '@mui/icons-material/People';
// import HomeIcon from '@mui/icons-material/Home';
// import AccountTreeIcon from '@mui/icons-material/AccountTree';
// import PersonIcon from '@mui/icons-material/Person';
// import Button from '@mui/material/Button';
// import Modal from '@mui/material/Modal';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
// import Badge from '@mui/material/Badge';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import AttachFileIcon from '@mui/icons-material/AttachFile';
// // import Button from '@mui/material/Button';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import dayjs from 'dayjs';
// import SendIcon from '@mui/icons-material/Send';
// import { Tooltip, ClickAwayListener } from '@mui/material';

// import '../index.css';


// const App = () => {
//   const [value, setValue] = useState(0);
//   const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [hashTags, setHashTags] = useState<string[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState<string>('프로젝트 모집');
//   const [startDate, setStartDate] = useState<dayjs.Dayjs | null>(dayjs());
//   const [endDate, setEndDate] = useState<dayjs.Dayjs | null>(dayjs());
//   const [showMore, setShowMore] = useState<boolean>(false);
//   const [profileModalOpen, setProfileModalOpen] = useState(false);
//   const [profileData, setProfileData] = useState({
//     interests: 'Web Development',
//     techStack: ['React', 'Node.js', 'MongoDB'],
//     tier: 'Gold I'
//   });
//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };

//   const toggleProfileMenu = () => {
//     setIsProfileMenuOpen(!isProfileMenuOpen);
//   };

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   const handleModalSubmit = () => {
//     // handle the submit logic here
//     toggleModal();
//   };

//   const handleHashTagChange = (event: SelectChangeEvent<string[]>) => {
//     setHashTags(event.target.value as string[]);
//   };

//   const handleCategoryChange = (event: React.SyntheticEvent, newValue: string) => {
//     setSelectedCategory(newValue);
//   };
//   const toggleShowMore = () => {
//     setShowMore(!showMore);
//   };
//   const toggleProfileModal = () => {
//     setProfileModalOpen(!profileModalOpen);
//   };

//   return (
//     <div className="flex flex-col items-center bg-gray-100 min-h-screen">
//       <header className="w-full bg-white shadow-sm z-50 relative">
//         <div className="max-w-6xl mx-auto flex items-center justify-between relative">
//           <div className="flex items-center space-x-4">
//             <img
//               src="https://store-images.s-microsoft.com/image/apps.31120.9007199266245564.44dc7699-748d-4c34-ba5e-d04eb48f7960.bc4172bd-63f0-455a-9acd-5457f44e4473?h=464"
//               alt="LinkedIn Logo"
//               className="w-10 h-10"
//             />
//             <input
//               type="text"
//               placeholder="Search"
//               className="border border-gray-300 rounded-full px-4 py-2"
//             />
//           </div>
//           <div className="flex items-center space-x-6">
//             <Tabs
//               value={value}
//               onChange={handleChange}
//               aria-label="icon label tabs example"
//               sx={{
//                 ".MuiTab-root": {
//                   minWidth: "70px",
//                   padding: "12px 12px",
//                   paddingBottom: "12px",
//                   fontSize: "0.7rem",
//                   "& .MuiTab-iconWrapper": {
//                     fontSize: "1.4rem",
//                   },
//                 },
//               }}
//             >
//               <Tab icon={<HomeIcon />} label="Home" />
//               {/* <Tab icon={<PeopleIcon />} label="Network" /> */}
//               <Tab icon={<AccountTreeIcon />} label="Projects" />
//               <Tab icon={<PersonIcon />} label="Mypage" />
//             </Tabs>
//             <div className="relative">
//               <img
//                 src="https://i.pinimg.com/originals/a7/ee/b8/a7eeb85a1d27390ebdf770f8cf31e434.jpg"
//                 alt="Profile"
//                 className="w-12 h-12 rounded-full cursor-pointer"
//                 onClick={toggleProfileMenu}
//               />
//               {isProfileMenuOpen && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg py-2 z-50">
//                   <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
//                     로그인
//                   </button>
//                   <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
//                     프로필 사진 수정
//                   </button>
//                   <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
//                     로그아웃
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </header>
//       <main className="flex w-full max-w-6xl mx-auto mt-4 space-x-4">
//         <section className="w-2/3">
//           <div className="flex bg-white p-4 shadow-sm rounded-lg">
//             <img
//               src="https://i.pinimg.com/originals/a7/ee/b8/a7eeb85a1d27390ebdf770f8cf31e434.jpg"
//               alt="Profile"
//               className="w-12 h-12 rounded-full mr-4"
//             />
//             <div className="flex-grow">
//               <button
//                 className="w-full border border-gray-300 rounded-lg p-4 text-gray-400 flex justify-between items-center hover:bg-gray-100"
//                 onClick={toggleModal}
//               >
//                 Start a Post
//                 <AttachFileIcon className="text-gray-400" />
//               </button>
//             </div>
//           </div>

//           <Box sx={{ width: "100%", typography: "body1" }}>
//             <TabContext value={selectedCategory}>
//               <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
//                 <TabList
//                   onChange={handleCategoryChange}
//                   aria-label="lab API tabs example"
//                 >
//                   <Tab label="Recruit" value="프로젝트 모집" />
//                   <Tab label="promotion" value="광고나 홍보성 글" />
//                   <Tab label="Recommend" value="개인 맞춤형 자동 피드보기" />
//                 </TabList>
//               </Box>
//               {/* <TabPanel value="프로젝트 모집">프로젝트 모집 콘텐츠</TabPanel> */}
//               {/* <TabPanel value="광고나 홍보성 글">광고나 홍보성 글 콘텐츠</TabPanel> */}
//               {/* <TabPanel value="개인 맞춤형 자동 피드보기">개인 맞춤형 자동 피드보기 콘텐츠</TabPanel> */}
//             </TabContext>
//           </Box>

//           {/* 콘텐츠 변경 부분 */}
//           {selectedCategory === "프로젝트 모집" && (
//             <div className="bg-white p-4 shadow-sm rounded-lg mt-4">
//               <div className="flex justify-between items-center w-full">
//                 <div className="flex items-center space-x-4">
//                   <img
//                     src="https://i.pinimg.com/originals/a7/ee/b8/a7eeb85a1d27390ebdf770f8cf31e434.jpg"
//                     alt="Profile"
//                     className="w-12 h-12 rounded-full cursor-pointer"
//                     onClick={toggleProfileModal}
//                   />
//                   <Modal
//   open={profileModalOpen}
//   onClose={toggleProfileModal}
//   aria-labelledby="profile-modal-title"
//   aria-describedby="profile-modal-description"
// >
//   <Box
//     sx={{
//       position: 'absolute',
//       top: '50%',
//       left: '50%',
//       transform: 'translate(-50%, -50%)',
//       width: 400,
//       bgcolor: 'background.paper',
//       border: '2px solid #000',
//       boxShadow: 24,
//       p: 4,
//     }}
//   >
//     <h2 id="profile-modal-title">User Profile</h2>
//     <p id="profile-modal-description">
//       <strong>Interests:</strong> Web Development, AI, Machine Learning<br/>
//       <strong>Technology Stack:</strong> React, Node.js, Python<br/>
//       <strong>Baekjoon Tier:</strong> Gold II
//     </p>
//   </Box>
// </Modal>
//                   <div>
//                     <h3 className="font-semibold">username11 </h3>
//                     <p className="text-gray-600">Backend developer</p>
//                   </div>
//                 </div>
//                 <Button variant="outlined" endIcon={<SendIcon />}>
//                   지원하기
//                 </Button>
//               </div>

//               <h4 className="font-semibold mt-4">프로젝트 주제</h4>
//               <p className="mt-2 text-gray-800">웹 프로젝트 </p>
//               <h4 className="font-semibold mt-4">모집 분야</h4>
//               <p className="mt-2 text-gray-800">프론트엔드, 백엔드, 디자이너</p>

//               {!showMore && (
//                 <Button
//                   variant="text"
//                   color="primary"
//                   onClick={toggleShowMore}
//                   className="mt-2"
//                 >
//                   Read More
//                 </Button>
//               )}

//               {showMore && (
//                 <>
//                   <h4 className="font-semibold mt-4">온/오프라인 유무</h4>
//                   <p className="mt-2 text-gray-800">온라인</p>
//                   <h4 className="font-semibold mt-4">프로젝트 기간</h4>
//                   <p className="mt-2 text-gray-800">2023-06-01 - 2023-12-31</p>
//                   <h4 className="font-semibold mt-4">주요 내용</h4>
//                   <p className="mt-2 text-gray-800">이번 프로젝트는</p>
//                   <Button
//                     variant="text"
//                     color="primary"
//                     onClick={toggleShowMore}
//                     className="mt-2"
//                   >
//                     Show Less
//                   </Button>
//                 </>
//               )}

//               <img
//                 src="https://via.placeholder.com/200x100"
//                 alt="Project"
//                 className="h-60 mt-4 w-full rounded-lg"
//               />

//               <Box className="flex gap-2 mt-4 ml-8">
//                 <Badge
//                   badgeContent="Frontend"
//                   color="default"
//                   sx={{
//                     ".MuiBadge-badge": {
//                       backgroundColor: "#f0f0f0",
//                       color: "#000",
//                       border: "1px solid #ccc",
//                     },
//                   }}
//                 />
//               </Box>

//               <div className="flex justify-between items-center mt-4 border-t pt-2">
//                 <div className="flex space-x-4">
//                   <button className="flex items-center space-x-2 text-gray-600">
//                     <svg
//                       className="w-5 h-5"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M5 13l4 4L19 7"
//                       ></path>
//                     </svg>
//                     <span>Like</span>
//                   </button>
//                   <button className="flex items-center space-x-2 text-gray-600">
//                     <svg
//                       className="w-5 h-5"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-8a2 2 0 012-2h2m3-3h4m-4 0V4m0 4h4m-4 0v4m0 0H7"
//                       ></path>
//                     </svg>
//                     <span>Comment</span>
//                   </button>
//                 </div>
//                 <button className="flex items-center space-x-2 text-gray-600">
//                   <svg
//                     className="w-5 h-5"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M15 10l4.5 4.5-1.5 1.5-4.5-4.5V4H9.5L15 10z"
//                     ></path>
//                   </svg>
//                   <span>Share</span>
//                 </button>
//               </div>
//             </div>
//           )}
          

//           {selectedCategory === "광고나 홍보성 글" && (
//             <div className="bg-white p-4 shadow-sm rounded-lg mt-4 relative">
//               {/* 해당 카테고리의 콘텐츠를 여기에 추가하세요 */}
//               <p>광고나 홍보성 글</p>
//             </div>
//           )}

//           {selectedCategory === "개인 맞춤형 자동 피드보기" && (
//             <div className="bg-white p-4 shadow-sm rounded-lg mt-4 relative">
//               <div className="flex justify-between items-center w-full">
//                 <div className="flex items-center space-x-4">
//                   <img
//                     src="https://i.pinimg.com/originals/a7/ee/b8/a7eeb85a1d27390ebdf770f8cf31e434.jpg"
//                     alt="Profile"
//                     className="w-12 h-12 rounded-full"
//                   />
//                   <div>
//                     <h3 className="font-semibold">username22</h3>
//                     <p className="text-gray-600">iOS Developer</p>
//                   </div>
//                 </div>
//                 <Button variant="outlined" endIcon={<SendIcon />}>
//                   지원하기
//                 </Button>
//               </div>

//               <h4 className="font-semibold mt-4">프로젝트 주제</h4>
//               <p className="mt-2 text-gray-800">모바일 앱 개발 프로젝트</p>
//               <h4 className="font-semibold mt-4">모집 분야</h4>
//               <p className="mt-2 text-gray-800">프론트엔드</p>

//               {!showMore && (
//                 <Button
//                   variant="text"
//                   color="primary"
//                   onClick={toggleShowMore}
//                   className="mt-2"
//                 >
//                   Read More
//                 </Button>
//               )}

//               {showMore && (
//                 <>
//                   <h4 className="font-semibold mt-4">온/오프라인 유무</h4>
//                   <p className="mt-2 text-gray-800">온라인</p>
//                   <h4 className="font-semibold mt-4">프로젝트 기간</h4>
//                   <p className="mt-2 text-gray-800">2023-06-01 - 2023-12-31</p>
//                   <h4 className="font-semibold mt-4">주요 내용</h4>
//                   <p className="mt-2 text-gray-800">이번 프로젝트는</p>
//                   <Button
//                     variant="text"
//                     color="primary"
//                     onClick={toggleShowMore}
//                     className="mt-2"
//                   >
//                     Show Less
//                   </Button>
//                 </>
//               )}

//               <img
//                 src="https://via.placeholder.com/200x100"
//                 alt="Project"
//                 className="h-60 mt-4 w-full rounded-lg"
//               />

//               <Box className="flex gap-2 mt-4 ml-8">
//                 <Badge
//                   badgeContent="Frontend"
//                   color="default"
//                   sx={{
//                     ".MuiBadge-badge": {
//                       backgroundColor: "#f0f0f0",
//                       color: "#000",
//                       border: "1px solid #ccc",
//                     },
//                   }}
//                 />
//               </Box>

//               <div className="flex justify-between items-center mt-4 border-t pt-2">
//                 <div className="flex space-x-4">
//                   <button className="flex items-center space-x-2 text-gray-600">
//                     <svg
//                       className="w-5 h-5"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M5 13l4 4L19 7"
//                       ></path>
//                     </svg>
//                     <span>Like</span>
//                   </button>
//                   <button className="flex items-center space-x-2 text-gray-600">
//                     <svg
//                       className="w-5 h-5"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-8a2 2 0 012-2h2m3-3h4m-4 0V4m0 4h4m-4 0v4m0 0H7"
//                       ></path>
//                     </svg>
//                     <span>Comment</span>
//                   </button>
//                 </div>
//                 <button className="flex items-center space-x-2 text-gray-600">
//                   <svg
//                     className="w-5 h-5"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M15 10l4.5 4.5-1.5 1.5-4.5-4.5V4H9.5L15 10z"
//                     ></path>
//                   </svg>
//                   <span>Share</span>
//                 </button>
//               </div>
//             </div>
//           )}
//         </section>
//         <aside className="w-1/4 flex flex-col space-y-4">
//           <div className="relative bg-white shadow-sm rounded-lg overflow-hidden">
//             <img
//               src="src/profile_bg.png"
//               alt="Background"
//               className="w-full h-32 object-cover"
//             />
//             <div className="flex flex-col items-center p-4">
//               <img
//                 src="https://i.pinimg.com/originals/a7/ee/b8/a7eeb85a1d27390ebdf770f8cf31e434.jpg"
//                 alt="Profile"
//                 className="w-24 h-24 rounded-full border-4 border-white -mt-12"
//               />
//               <h2 className="mt-4 font-semibold">Username</h2>
//               <p className="text-gray-600">Frontend developer</p>
//               <p className="text-gray-600">Gold II https://github.com/</p>
//             </div>
//           </div>
//           <div className="bg-white p-4 shadow-sm rounded-lg">
//             <div className="mt-4">
//               <h3 className="font-semibold mb-4">My Project</h3>
//               <div className="mb-4">
//                 {/* Project Cards List */}
//                 <div className="space-y-2">
//                   <div className="flex items-center bg-gray-100 p-1 rounded-lg shadow-sm">
//                     <img
//                       src="https://via.placeholder.com/150"
//                       alt="Project Image"
//                       className="w-12 h-12 rounded-md object-cover mr-4"
//                     />
//                     <div>
//                       <h4 className="font-semibold">Project Title 1</h4>
//                       {/* <p className="text-gray-600">Project description goes here. This is a brief overview of the project.</p> */}
//                     </div>
//                   </div>
//                   <div className="flex items-center bg-gray-100 p-1 rounded-lg shadow-sm">
//                     <img
//                       src="https://via.placeholder.com/150"
//                       alt="Project Image"
//                       className="w-12 h-12 rounded-md object-cover mr-4"
//                     />
//                     <div>
//                       <h4 className="font-semibold">Project Title 2</h4>
//                       {/* <p className="text-gray-600">Project description goes here. This is a brief overview of the project.</p> */}
//                     </div>
//                   </div>
//                   {/* Add more project cards as needed */}
//                 </div>
//               </div>
//               <div className="mb-4">
//                 <h4 className="font-semibold">해시태그</h4>
//               </div>
//               <div className="mb-4">
//                 <h4 className="font-semibold">트렌드기사&광고</h4>
//               </div>
//             </div>
//           </div>
//         </aside>
//       </main>
//       <Modal open={isModalOpen} onClose={toggleModal}>
//         <Box
//           className="flex flex-col bg-white p-4 rounded-lg shadow-lg mx-auto my-12"
//           sx={{
//             width: 500,
//             maxHeight: "80vh",
//             overflowY: "auto",
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//           }}
//         >
//           <h2 className="text-2xl font-semibold mb-4">프로젝트 모집</h2>
//           <TextField
//             label="목적"
//             variant="outlined"
//             select
//             fullWidth
//             sx={{ mb: 2 }}
//           >
//             <MenuItem value="회원 모집">회원 모집</MenuItem>
//             <MenuItem value="프로젝트 홍보">프로젝트 홍보</MenuItem>
//             <MenuItem value="유익한 정보">유익한 정보</MenuItem>
//             <MenuItem value="스터디 모집">스터디 모집</MenuItem>
//           </TextField>
//           <TextField
//             label="프로젝트 주제"
//             variant="outlined"
//             fullWidth
//             sx={{ mb: 2 }}
//           />
//           <TextField
//             label="온/오프라인 유무"
//             variant="outlined"
//             select
//             fullWidth
//             sx={{ mb: 2 }}
//           >
//             <MenuItem value="온라인">온라인</MenuItem>
//             <MenuItem value="오프라인">오프라인</MenuItem>
//             <MenuItem value="혼합">혼합</MenuItem>
//           </TextField>
//           <LocalizationProvider dateAdapter={AdapterDayjs}>
//             <div className="flex space-x-4 mb-2">
//               <DatePicker
//                 label="시작 날짜"
//                 value={startDate}
//                 onChange={(newValue) => setStartDate(newValue)}
//                 // renderInput={(params) => <TextField {...params} fullWidth />}
//               />
//               <DatePicker
//                 label="종료 날짜"
//                 value={endDate}
//                 onChange={(newValue) => setEndDate(newValue)}
//                 // renderInput={(params) => <TextField {...params} fullWidth />}
//               />
//             </div>
//           </LocalizationProvider>
//           <TextField
//             label="모집 분야"
//             variant="outlined"
//             fullWidth
//             sx={{ mb: 2 }}
//           />
//           <TextField
//             label="주요 내용"
//             variant="outlined"
//             multiline
//             rows={4}
//             fullWidth
//             sx={{ mb: 2 }}
//           />
//           <Button
//             variant="contained"
//             component="label"
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               backgroundColor: "gray",
//               color: "white",
//               mb: 4,
//               "&:hover": {
//                 backgroundColor: "darkgray",
//               },
//             }}
//           >
//             <AddPhotoAlternateIcon sx={{ mr: 1 }} />
//             Photo
//             <input type="file" hidden />
//           </Button>
//           <TextField
//             label="모집 기간"
//             variant="outlined"
//             fullWidth
//             sx={{ mb: 2 }}
//           />
//           <TextField
//             label="참고 Link "
//             variant="outlined"
//             fullWidth
//             sx={{ mb: 2 }}
//           />
//           <FormControl fullWidth variant="outlined" sx={{ mb: 4 }}>
//             <InputLabel id="hash-tag-select-label">해쉬태그 선택</InputLabel>
//             <Select
//               labelId="hash-tag-select-label"
//               id="hash-tag-select"
//               multiple
//               value={hashTags}
//               onChange={handleHashTagChange}
//               label="해쉬태그 선택"
//             >
//               <MenuItem value="프론트">프론트</MenuItem>
//               <MenuItem value="백엔드">백엔드</MenuItem>
//               <MenuItem value="AI">AI</MenuItem>
//               <MenuItem value="서버">서버</MenuItem>
//               <MenuItem value="클라우드">클라우드</MenuItem>
//               <MenuItem value="Devops">Devops</MenuItem>
//             </Select>
//           </FormControl>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleModalSubmit}
//           >
//             Submit
//           </Button>
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// export default App;


import React, { useState } from 'react';
import Header from '../components/Header';
import MainContent from '../components/home/MainContent';
import Sidebar from '../components/home/Sidebar';
import '../index.css';

const App: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen">
      <Header value={value} onChange={handleChange} />
      <main className="flex w-full max-w-6xl mx-auto mt-4 space-x-4">
        <MainContent />
        <Sidebar />
      </main>
    </div>
  );
};

export default App;
