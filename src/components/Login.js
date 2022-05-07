import React from "react";
import Button from "@material-ui/core/Button";
import { getAuth, signInWithPopup } from "firebase/auth";
import { provider } from "../firebase";
import { login } from "../features/userSlice";
import { useDispatch } from "react-redux";
import Logo from "../img/logo-gmail2.png";
import "../css/login.css";
const Login = () => {
  const dispatch = useDispatch();
  const auth = getAuth();

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src={Logo} alt=""></img>
        <Button variant="contained" color="primary" onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
