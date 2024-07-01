import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Stepper,
  Step,
  StepLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  ImageList,
  ImageListItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const steps = [
  "Basic Information",
  "Development Interests",
  "Development Stack",
  "Quiz",
];

const developmentStacks = [
  { title: "JavaScript", img: "https://skillicons.dev/icons?i=js&theme=light" },
  { title: "TypeScript", img: "https://skillicons.dev/icons?i=ts" },
  { title: "React", img: "https://skillicons.dev/icons?i=react&theme=light" },
  { title: "Vue", img: "https://skillicons.dev/icons?i=vue&theme=light" },
  {
    title: "Node.js",
    img: "https://skillicons.dev/icons?i=nodejs&theme=light",
  },
  { title: "Spring", img: "https://skillicons.dev/icons?i=spring&theme=light" },
  { title: "Java", img: "https://skillicons.dev/icons?i=java&theme=light" },
  {
    title: "Next.js",
    img: "https://skillicons.dev/icons?i=nextjs&theme=light",
  },
  { title: "NestJS", img: "https://skillicons.dev/icons?i=nestjs&theme=light" },
  {
    title: "Express",
    img: "https://skillicons.dev/icons?i=express&theme=light",
  },
  { title: "Go", img: "https://skillicons.dev/icons?i=go&theme=light" },
  { title: "C", img: "https://skillicons.dev/icons?i=c&theme=light" },
  { title: "Python", img: "https://skillicons.dev/icons?i=python&theme=light" },
  { title: "Django", img: "https://skillicons.dev/icons?i=django&theme=light" },
  { title: "Swift", img: "https://skillicons.dev/icons?i=swift&theme=light" },
  { title: "Kotlin", img: "https://skillicons.dev/icons?i=kotlin&theme=light" },
  { title: "MySQL", img: "https://skillicons.dev/icons?i=mysql&theme=light" },
  {
    title: "MongoDB",
    img: "https://skillicons.dev/icons?i=mongodb&theme=light",
  },
  { title: "PHP", img: "https://skillicons.dev/icons?i=php&theme=light" },
  {
    title: "GraphQL",
    img: "https://skillicons.dev/icons?i=graphql&theme=light",
  },
  {
    title: "Firebase",
    img: "https://skillicons.dev/icons?i=firebase&theme=light",
  },
  {
    title: "React Native",
    img: "https://skillicons.dev/icons?i=react&theme=light",
  },
  { title: "Unity", img: "https://skillicons.dev/icons?i=unity&theme=light" },
  {
    title: "Flutter",
    img: "https://skillicons.dev/icons?i=flutter&theme=light",
  },
  { title: "AWS", img: "https://skillicons.dev/icons?i=aws&theme=light" },
  { title: "Kubernetes", img: "https://skillicons.dev/icons?i=kubernetes" },
  { title: "Docker", img: "https://skillicons.dev/icons?i=docker" },
  { title: "Git", img: "https://skillicons.dev/icons?i=git&theme=light" },
  { title: "Figma", img: "https://skillicons.dev/icons?i=figma&theme=light" },
];

const Register: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    nickname: "",
    interests: "",
    quizAnswer: "",
  });
  const [selectedStacks, setSelectedStacks] = useState<number[]>([]);

  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleNext = () => {
    if (activeStep === 2 && selectedStacks.length === 0) {
      alert("Please select at least one development stack.");
      return;
    }
    if (activeStep === steps.length - 1 && !formValues.quizAnswer) {
      alert("Please select an answer for the quiz.");
      return;
    }
    if (activeStep === steps.length - 1) {
      console.log(
        "Selected stacks:",
        selectedStacks.map((index) => developmentStacks[index].title)
      );
      console.log("Quiz answer:", formValues.quizAnswer);
      navigate("/login");
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStackSelect = (index: number) => {
    const currentIndex = selectedStacks.indexOf(index);
    const newSelectedStacks = [...selectedStacks];

    if (currentIndex === -1) {
      newSelectedStacks.push(index);
    } else {
      newSelectedStacks.splice(currentIndex, 1);
    }

    setSelectedStacks(newSelectedStacks);
  };

  const handleQuizAnswerChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormValues({ ...formValues, quizAnswer: event.target.value });
  };

  const renderStackSelection = () => (
    <ImageList sx={{ width: "100%", height: 400 }} cols={8} rowHeight={80}>
      {developmentStacks.map((stack, index) => (
        <ImageListItem
          key={stack.title}
          onClick={() => handleStackSelect(index)}
          style={{
            cursor: "pointer",
            border: selectedStacks.includes(index) ? "2px solid blue" : "none",
            padding: "10px",
          }}
        >
          <img
            src={stack.img}
            alt={stack.title}
            loading="lazy"
            style={{ width: "100%", height: "100%" }}
          />
          <Typography sx={{ textAlign: "center", mt: 1 }}>
            {stack.title}
          </Typography>
        </ImageListItem>
      ))}
    </ImageList>
  );

  const renderQuizQuestion = () => (
    <FormControl component="fieldset">
      <FormLabel component="legend">
        Q. React는 라이브러리 or 프레임워크?
      </FormLabel>
      <RadioGroup
        name="quizAnswer"
        value={formValues.quizAnswer}
        className="mt-8"
        onChange={handleQuizAnswerChange}
      >
        <FormControlLabel value="library" control={<Radio />} label="Library" />
        <FormControlLabel
          value="framework"
          control={<Radio />}
          label="Framework"
        />
      </RadioGroup>
    </FormControl>
  );

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f4f6f8",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "70%",
          maxWidth: "800px",
          boxShadow: 3,
          borderRadius: 2,
          overflow: "hidden",
          backgroundColor: "#fff",
          p: 4,
        }}
      >
        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === 0 && (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              value={formValues.password}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={formValues.confirmPassword}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Nickname"
              name="nickname"
              value={formValues.nickname}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
            />
          </Box>
        )}
        {activeStep === 1 && (
          <FormControl component="fieldset">
            <FormLabel component="legend">Development Interests</FormLabel>
            <RadioGroup
              name="interests"
              value={formValues.interests}
              onChange={handleInputChange}
            >
              <FormControlLabel
                value="frontend"
                control={<Radio />}
                label="Frontend"
              />
              <FormControlLabel
                value="backend"
                control={<Radio />}
                label="Backend"
              />
              <FormControlLabel value="ai" control={<Radio />} label="AI" />
              <FormControlLabel
                value="server"
                control={<Radio />}
                label="Server"
              />
              <FormControlLabel
                value="cloud"
                control={<Radio />}
                label="Cloud"
              />
              <FormControlLabel
                value="devops"
                control={<Radio />}
                label="DevOps"
              />
            </RadioGroup>
          </FormControl>
        )}
        {activeStep === 2 && renderStackSelection()}
        {activeStep === 3 && renderQuizQuestion()}
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 4 }}
        >
          {activeStep !== 0 && (
            <Button variant="contained" onClick={handleBack}>
              Back
            </Button>
          )}
          <Button variant="contained" color="primary" onClick={handleNext}>
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
