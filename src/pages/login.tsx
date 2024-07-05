import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import GoogleLoginButton from "../components/login/GoogleLoginButton";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/signup");
  };

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
          width: "70%",
          maxWidth: "1200px",
          boxShadow: 3,
          borderRadius: 2,
          overflow: "hidden",
          backgroundColor: "#fff",
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            p: 4,
          }}
        >
          <Typography variant="h4" sx={{ mb: 2 }}>
            Sign In to Recharge Direct
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            If you don't have an account you can{" "}
            <Button
              variant="text"
              color="primary"
              onClick={handleRegisterClick}
            >
              Register here!
            </Button>
          </Typography>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            p: 4,
            backgroundColor: "#eef2f5",
          }}
        >
          <Box sx={{ width: "100%", maxWidth: "400px" }}>
            <GoogleLoginButton />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
