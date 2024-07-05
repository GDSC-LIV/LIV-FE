import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import { useNavigate } from "react-router-dom";

const GoogleLoginButton: React.FC = () => {
  const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
  const navigate = useNavigate();
  return (
    <>
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <GoogleLogin
          onSuccess={(res) => {
            console.log(res);
            navigate("/signup");
          }}
          onError={() => {
            console.error("Fail");
          }}
        ></GoogleLogin>
      </GoogleOAuthProvider>
    </>
  );
};
export default GoogleLoginButton;
