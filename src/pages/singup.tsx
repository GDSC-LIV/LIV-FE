import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Stepper, Step, StepLabel, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import skillicons from './skillicons'; // 기술 스택 아이콘 데이터를 포함하는 파일

const steps = ['Basic Information', 'Development Interests', 'Development Stack'];

const Register: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    nickname: '',
    birthdate: '',
    interests: '',
    stacks: {
      js: false,
      html: false,
      css: false,
      wasm: false,
      // 추가적인 기술 스택...
    },
  });

  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleIconClick = (stack: string) => {
    setFormValues({ ...formValues, stacks: { ...formValues.stacks, [stack]: !formValues.stacks[stack] } });
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleRegisterClick = () => {
    navigate('/login');
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f4f6f8' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '70%', maxWidth: '800px', boxShadow: 3, borderRadius: 2, overflow: 'hidden', backgroundColor: '#fff', p: 4 }}>
        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Registration Complete
            </Typography>
            <Button variant="contained" color="primary" onClick={handleRegisterClick}>
              Go to Login
            </Button>
          </>
        ) : (
          <>
            {activeStep === 0 && (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField label="Email" name="email" value={formValues.email} onChange={handleInputChange} variant="outlined" fullWidth />
                <TextField label="Password" name="password" type="password" value={formValues.password} onChange={handleInputChange} variant="outlined" fullWidth />
                <TextField label="Confirm Password" name="confirmPassword" type="password" value={formValues.confirmPassword} onChange={handleInputChange} variant="outlined" fullWidth />
                <TextField label="Nickname" name="nickname" value={formValues.nickname} onChange={handleInputChange} variant="outlined" fullWidth />
                <TextField label="Birthdate" name="birthdate" value={formValues.birthdate} onChange={handleInputChange} variant="outlined" fullWidth />
              </Box>
            )}
            {activeStep === 1 && (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Development Interests</FormLabel>
                  <RadioGroup name="interests" value={formValues.interests} onChange={handleInputChange}>
                    <FormControlLabel value="frontend" control={<Radio />} label="Frontend" />
                    <FormControlLabel value="backend" control={<Radio />} label="Backend" />
                    <FormControlLabel value="ai" control={<Radio />} label="AI" />
                    <FormControlLabel value="server" control={<Radio />} label="Server" />
                    <FormControlLabel value="cloud" control={<Radio />} label="Cloud" />
                    <FormControlLabel value="devops" control={<Radio />} label="DevOps" />
                  </RadioGroup>
                </FormControl>
              </Box>
            )}
            {activeStep === 2 && (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Development Stack</FormLabel>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                    {Object.keys(formValues.stacks).map((stack) => (
                      <Box
                        key={stack}
                        sx={{
                          border: formValues.stacks[stack] ? '2px solid blue' : '2px solid transparent',
                          borderRadius: '80%',
                          cursor: 'pointer',
                        }}
                        onClick={() => handleIconClick(stack)}
                      >
                        <img src={`https://skillicons.dev/icons?i=${stack}`} alt={stack} style={{ width: 40, height: 40 }} />
                      </Box>
                    ))}
                  </Box>
                </FormControl>
              </Box>
            )}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 4 }}>
              {activeStep !== 0 && (
                <Button variant="contained" onClick={handleBack}>
                  Back
                </Button>
              )}
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Register;
