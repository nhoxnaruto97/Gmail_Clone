import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, IconButton } from "@material-ui/core";
import Logo from "../img/logo-gmail.png";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import "../css/header.css";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import { getAuth, signOut } from "firebase/auth";

const Header = () => {
  const auth = getAuth();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const SignOut = () => {
    signOut(auth).then(() => {
      dispatch(logout());
    });
  };
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src={Logo} alt="" />
      </div>

      <div className="header__middle">
        <SearchIcon />
        <input placeholder="Search null" type="text" />
        <ArrowDropDownIcon className="header__inputCaret" />
      </div>

      <div className="header__right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar onClick={SignOut} src={user?.photoURL} />
      </div>
    </div>
  );
};

export default Header;
