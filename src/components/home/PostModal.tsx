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
  const [startDate, setStartDate] = useState<dayjs.Dayjs | null>(dayjs());
  const [endDate, setEndDate] = useState<dayjs.Dayjs | null>(dayjs());
  const [hashTags, setHashTags] = useState<string[]>([]);

  const handleHashTagChange = (event: SelectChangeEvent<string[]>) => {
    setHashTags(event.target.value as string[]);
  };

  const handleSubmit = () => {
    // handle the submit logic here
    onClose();
  };

  return (
    <Box
      className="flex flex-col bg-white p-4 rounded-lg shadow-lg mx-auto my-12"
      sx={{
        width: 500,
        maxHeight: "80vh",
        overflowY: "auto",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <h2 className="text-2xl font-semibold mb-4">프로젝트 모집</h2>
      <TextField
        label="목적"
        variant="outlined"
        select
        fullWidth
        sx={{ mb: 2 }}
      >
        <MenuItem value="회원 모집">회원 모집</MenuItem>
        <MenuItem value="프로젝트 홍보">프로젝트 홍보</MenuItem>
        <MenuItem value="유익한 정보">유익한 정보</MenuItem>
        <MenuItem value="스터디 모집">스터디 모집</MenuItem>
      </TextField>
      <TextField
        label="프로젝트 주제"
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="온/오프라인 유무"
        variant="outlined"
        select
        fullWidth
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
      <TextField
        label="모집 분야"
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="주요 내용"
        variant="outlined"
        multiline
        rows={4}
        fullWidth
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        component="label"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "gray",
          color: "white",
          mb: 4,
          "&:hover": {
            backgroundColor: "darkgray",
          },
        }}
      >
        <AddPhotoAlternateIcon sx={{ mr: 1 }} />
        Photo
        <input type="file" hidden />
      </Button>
      <TextField
        label="모집 기간"
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="참고 Link "
        variant="outlined"
        fullWidth
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
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Box>
  );
};

export default PostModal;
