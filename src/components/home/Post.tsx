// import React, { useState, useRef } from 'react';
// import Button from '@mui/material/Button';
// import SendIcon from '@mui/icons-material/Send';
// import Avatar from '@mui/material/Avatar';
// import { format } from 'date-fns';
// import ProfileModal from '../home/ProfileModal';

// interface IPost {
//   id: number;
//   username: string;
//   role: string;
//   projectTitle: string;
//   recruitmentField: string;
//   online: string;
//   projectPeriod: string;
//   projectDescription: string;
//   imageUrl: string;
//   comments: IComment[];
// }

// interface IComment {
//   id: number;
//   text: string;
//   timestamp: Date;
// }

// interface PostProps {
//   post: IPost;
// }

// const Post: React.FC<PostProps> = ({ post }) => {
//   const [showMore, setShowMore] = useState<boolean>(false);
//   const [profileModalOpen, setProfileModalOpen] = useState<boolean>(false);
//   const [profileModalPosition, setProfileModalPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
//   const [showComments, setShowComments] = useState<boolean>(false);
//   const [commentText, setCommentText] = useState<string>('');
//   const [comments, setComments] = useState<IComment[]>([]);
//   const [nextCommentId, setNextCommentId] = useState<number>(1);

//   const profileRef = useRef<HTMLImageElement | null>(null);

//   const toggleProfileModal = () => {
//     if (profileRef.current) {
//       const rect = profileRef.current.getBoundingClientRect();
//       setProfileModalPosition({
//         top: rect.top + window.scrollY,
//         left: rect.left + window.scrollX - 300,
//       });
//     }
//     setProfileModalOpen(!profileModalOpen);
//   };

//   const toggleShowMore = () => {
//     setShowMore(!showMore);
//   };

//   const toggleComments = () => {
//     setShowComments(!showComments);
//   };

//   const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setCommentText(event.target.value);
//   };

//   const handleSubmitComment = () => {
//     if (commentText.trim() !== '') {
//       const newComment = {
//         id: nextCommentId,
//         text: commentText,
//         timestamp: new Date(),
//       };
//       setComments([...comments, newComment]);
//       setCommentText('');
//       setNextCommentId(nextCommentId + 1);
//     }
//   };

//   return (
//     <div className="bg-white p-4 shadow-sm rounded-lg mt-4 relative">
//       <div className="flex justify-between items-center w-full">
//         <div className="flex items-center space-x-4">
//           <img
//             ref={profileRef}
//             src={post.imageUrl}
//             alt="Profile"
//             className="w-12 h-12 rounded-full cursor-pointer"
//             onClick={toggleProfileModal}
//           />
//           <ProfileModal
//             open={profileModalOpen}
//             onClose={() => setProfileModalOpen(false)}
//             position={profileModalPosition}
//             user={{ username: post.username, role: post.role }}
//           />
//           <div>
//             <h3 className="font-semibold">{post.username}</h3>
//             <p className="text-gray-600">{post.role}</p>
//           </div>
//         </div>
//         <Button variant="outlined" endIcon={<SendIcon />}>
//           지원하기
//         </Button>
//       </div>

//       <h4 className="font-semibold mt-4">프로젝트 주제</h4>
//       <p className="mt-2 text-gray-800">{post.projectTitle}</p>
//       <h4 className="font-semibold mt-4">모집 분야</h4>
//       <p className="mt-2 text-gray-800">{post.recruitmentField}</p>

//       {!showMore && (
//         <Button
//           variant="text"
//           color="primary"
//           onClick={toggleShowMore}
//           className="mt-2"
//         >
//           Read More
//         </Button>
//       )}

//       {showMore && (
//         <>
//           <h4 className="font-semibold mt-4">온/오프라인 유무</h4>
//           <p className="mt-2 text-gray-800">{post.online}</p>
//           <h4 className="font-semibold mt-4">프로젝트 기간</h4>
//           <p className="mt-2 text-gray-800">{post.projectPeriod}</p>
//           <h4 className="font-semibold mt-4">주요 내용</h4>
//           <p className="mt-2 text-gray-800">{post.projectDescription}</p>
//           <Button
//             variant="text"
//             color="primary"
//             onClick={toggleShowMore}
//             className="mt-2"
//           >
//             Show Less
//           </Button>
//         </>
//       )}

//       <img
//         src={post.imageUrl}
//         alt="Project"
//         className="h-60 mt-4 w-full rounded-lg"
//       />

//       <div className="mt-4">
//         <button
//           className="text-blue-500 hover:underline"
//           onClick={toggleComments}
//         >
//           Comment
//         </button>
//         {showComments && (
//           <div className="mt-4 border-t border-gray-200 pt-4">
//             <input
//               type="text"
//               value={commentText}
//               onChange={handleCommentChange}
//               placeholder="Write your comment..."
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-2"
//             />
//             <button
//               className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-2"
//               onClick={handleSubmitComment}
//             >
//               Submit
//             </button>
//             {comments.length > 0 && (
//               <div className="mt-4">
//                 <h4 className="font-semibold">Comments</h4>
//                 {comments.map((comment) => (
//                   <div key={comment.id} className="flex items-start mt-2">
//                     <Avatar src={post.imageUrl} alt="Avatar" />
//                     <div className="ml-3">
//                       <p className="text-sm text-gray-600">{format(comment.timestamp, 'yyyy-MM-dd HH:mm')}</p>
//                       <p className="mt-1">{comment.text}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Post;
