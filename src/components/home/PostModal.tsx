import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import dayjs from 'dayjs';

interface PostModalProps {
  onClose: () => void;
}

const PostModal: React.FC<PostModalProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [purpose, setPurpose] = useState('');
  const [topic, setTopic] = useState('');
  const [content, setContent] = useState('');
  const [recruitmentField, setRecruitmentField] = useState('');
  const [onlineStatus, setOnlineStatus] = useState('');
  const [startDate, setStartDate] = useState<dayjs.Dayjs | null>(dayjs());
  const [endDate, setEndDate] = useState<dayjs.Dayjs | null>(dayjs());
  const [image, setImage] = useState<File | null>(null);
  const [applicationURL, setApplicationURL] = useState('');
  const [hashTags, setHashTags] = useState<string[]>([]);

  const handleHashTagChange = (event: SelectChangeEvent<string[]>) => {
    setHashTags(event.target.value as string[]);
  };

  const handleNextStep = () => {
    setStep(2);
  };

  const handlePreviousStep = () => {
    setStep(1);
  };

  const handleSubmit = () => {
    // handle the submit logic here
    onClose();
  };

  return (
    <Box
      className="flex flex-col bg-white p-4 rounded-lg shadow-lg mx-auto my-18"
      sx={{
        width: 600,
        maxHeight: "80vh",
        overflowY: "auto",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <h2 className="text-2xl font-semibold mb-4">Start a Post</h2>
      
      {step === 1 && (
        <>
          <TextField
            label="목적"
            variant="outlined"
            select
            fullWidth
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            sx={{ mb: 2 }}
          >
            <MenuItem value="회원 모집">회원 모집</MenuItem>
            <MenuItem value="프로젝트 홍보">프로젝트 홍보</MenuItem>
            <MenuItem value="유익한 정보">유익한 정보</MenuItem>
            <MenuItem value="스터디 모집">스터디 모집</MenuItem>
          </TextField>
          <TextField
            label="주제"
            variant="outlined"
            fullWidth
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="주요 내용"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            value={content}
            onChange={(e) => setContent(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="모집 분야"
            variant="outlined"
            fullWidth
            value={recruitmentField}
            onChange={(e) => setRecruitmentField(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleNextStep}
            sx={{ mt: 2 }}
          >
            다음
          </Button>
        </>
      )}

      {step === 2 && (
        <>
          <TextField
            label="온/오프라인 유무"
            variant="outlined"
            select
            fullWidth
            value={onlineStatus}
            onChange={(e) => setOnlineStatus(e.target.value)}
            sx={{ mb: 2 }}
          >
            <MenuItem value="온라인">온라인</MenuItem>
            <MenuItem value="오프라인">오프라인</MenuItem>
            <MenuItem value="혼합">혼합</MenuItem>
          </TextField>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="flex space-x-4 mb-2">
              <DatePicker
                label="시작 날짜"
                value={startDate}
                onChange={(newValue) => setStartDate(newValue)}
              />
              <DatePicker
                label="종료 날짜"
                value={endDate}
                onChange={(newValue) => setEndDate(newValue)}
              />
            </div>
          </LocalizationProvider>
          <Button
            variant="contained"
            component="label"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "gray",
              color: "white",
              mb: 2,
              "&:hover": {
                backgroundColor: "darkgray",
              },
            }}
          >
            <AddPhotoAlternateIcon sx={{ mr: 1 }} />
            사진 추가
            <input
              type="file"
              hidden
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setImage(e.target.files[0]);
                }
              }}
            />
          </Button>
          <TextField
            label="지원 URL"
            variant="outlined"
            fullWidth
            value={applicationURL}
            onChange={(e) => setApplicationURL(e.target.value)}
            sx={{ mb: 2 }}
          />
          <FormControl fullWidth variant="outlined" sx={{ mb: 4 }}>
            <InputLabel id="hash-tag-select-label">해쉬태그 선택</InputLabel>
            <Select
              labelId="hash-tag-select-label"
              id="hash-tag-select"
              multiple
              value={hashTags}
              onChange={handleHashTagChange}
              label="해쉬태그 선택"
            >
              <MenuItem value="프론트">프론트</MenuItem>
              <MenuItem value="백엔드">백엔드</MenuItem>
              <MenuItem value="AI">AI</MenuItem>
              <MenuItem value="서버">서버</MenuItem>
              <MenuItem value="클라우드">클라우드</MenuItem>
              <MenuItem value="Devops">Devops</MenuItem>
            </Select>
          </FormControl>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handlePreviousStep}
            >
              이전
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              제출
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default PostModal;
