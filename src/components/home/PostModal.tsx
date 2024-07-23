import React, { useState, forwardRef, Ref } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import axios from 'axios';

interface PostModalProps {
  onClose: () => void;
}

const PostModal = forwardRef((props: PostModalProps, ref: Ref<HTMLDivElement>) => {
  const { onClose } = props;
  const [step, setStep] = useState(1);
  const [postType, setPostType] = useState('RECRUIT');
  const [topic, setTopic] = useState('');
  const [content, setContent] = useState('');
  const [recruitmentField, setRecruitmentField] = useState('');
  const [onlineStatus, setOnlineStatus] = useState('');
  const [startDate, setStartDate] = useState<dayjs.Dayjs | null>(dayjs());
  const [endDate, setEndDate] = useState<dayjs.Dayjs | null>(dayjs());
  const [applicationURL, setApplicationURL] = useState('');

  const handleNextStep = () => {
    setStep(2);
  };

  const handlePreviousStep = () => {
    setStep(1);
  };

  const handleSubmit = async () => {
    const isOnlineTransformed = onlineStatus === '온라인' ? true : onlineStatus === '오프라인' ? false : null;

    const postData = {
      topic,
      content,
      type: postType,
      ...(postType === 'RECRUIT' && {
        field: recruitmentField,
        is_online: isOnlineTransformed,
        duration: `${startDate?.format('YYYY-MM-DD')} - ${endDate?.format('YYYY-MM-DD')}`,
        contact: applicationURL,
      }),
    };

    console.log('Submitting post data:', postData);

    try {
      const response = await axios.post('/posts/register', postData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Response from API:', response);

      if (response.data.isSuccess) {
        alert(response.data.message);
        onClose();
      } else {
        console.error('API response error:', response.data);
        alert('오류가 발생했습니다. 다시 시도해 주세요.');
      }
    } catch (error) {
      console.error('Error posting data:', error);
      alert('오류가 발생했습니다. 다시 시도해 주세요.');
    }
  };

  return (
    <Box
      ref={ref}
      className="flex flex-col bg-white p-8 rounded-lg shadow-lg mx-auto my-18"
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
      <h2 className="text-2xl font-semibold mb-8">Start a Post</h2>

      {step === 1 && (
        <>
          <TextField
            label="게시물 종류"
            variant="outlined"
            select
            fullWidth
            value={postType}
            onChange={(e) => setPostType(e.target.value)}
            sx={{ mb: 2 }}
          >
            <MenuItem value="RECRUIT">RECRUIT</MenuItem>
            <MenuItem value="PROMOTION">PROMOTION</MenuItem>
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
          {postType === 'RECRUIT' && (
            <>
              <TextField
                label="모집 분야"
                variant="outlined"
                fullWidth
                value={recruitmentField}
                onChange={(e) => setRecruitmentField(e.target.value)}
                sx={{ mb: 6 }}
              />
              <Button
                variant="outlined"
                color="primary"
                onClick={handleNextStep}
                sx={{
                  mt: 8,
                  position: 'absolute',
                  bottom: 16,
                  right: 16,
                  width: 'auto',
                  borderRadius: '16px',
                  borderColor: 'black',
                  color: 'black',
                  backgroundColor: 'transparent',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                    borderColor: 'black',
                  }
                }}
              >
                다음
              </Button>
            </>
          )}
          {postType === 'PROMOTION' && (
            <Button
              variant="outlined"
              color="primary"
              onClick={handleSubmit}
              sx={{
                mt: 10,
                position: 'absolute',
                bottom: 16,
                right: 16,
                width: 'auto',
                borderRadius: '16px',
                borderColor: 'black',
                color: 'black',
                backgroundColor: 'transparent',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.1)',
                  borderColor: 'black',
                }
              }}
            >
              제출
            </Button>
          )}
        </>
      )}

      {step === 2 && postType === 'RECRUIT' && (
        <>
          <TextField
            label="온/오프라인 유무"
            variant="outlined"
            select
            fullWidth
            value={onlineStatus}
            onChange={(e) => setOnlineStatus(e.target.value)}
            sx={{ mb: 4 }}
          >
            <MenuItem value="온라인">온라인</MenuItem>
            <MenuItem value="오프라인">오프라인</MenuItem>
            <MenuItem value="혼합">혼합</MenuItem>
          </TextField>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="flex space-x-4 mb-6">
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
            label="지원 URL"
            variant="outlined"
            fullWidth
            value={applicationURL}
            onChange={(e) => setApplicationURL(e.target.value)}
            sx={{ mb:20}}
          />
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              onClick={handlePreviousStep}
              variant="outlined"
              color="primary"
              sx={{
                mt: 12,
                position: 'absolute',
                bottom: 16,
                left: 16,
                width: 'auto',
                borderRadius: '16px',
                borderColor: 'black',
                color: 'black',
                backgroundColor: 'transparent',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.1)',
                  borderColor: 'black',
                }
              }}
            >
              이전
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleSubmit}
              sx={{
                position: 'absolute',
                bottom: 16,
                right: 16,
                width: 'auto',
                borderRadius: '16px',
                borderColor: 'black',
                color: 'black',
                backgroundColor: 'transparent',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.1)',
                  borderColor: 'black',
                }
              }}
            >
              제출
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
});

export default PostModal;
