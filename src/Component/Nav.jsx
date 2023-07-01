import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import SearchIcon from "@mui/icons-material/Search";
import QrCodeIcon from "@mui/icons-material/QrCode";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import "./Nav.css";
import AppsMenu from "./Appmenu";
import Login from "../login";
import GetApp from "./getApp";
import { UserContext } from "../App";

export default function Nav(props) {
  const { count, loginshow } = props;

  const [clicklogin, setClickLogin] = useState(false);
  const [clickgetapp, setClickGetApp] = useState(false);
  const { islogin, setislogin, closebtnlogin, setclosebtnlogin } =
    useContext(UserContext);

  const Btn = (props) => {
    const handleClick = () => {
      if (props.name === "GetApp") {
        setClickGetApp(true);
        console.log("clicked");
      }
      if (props.name == "Login") {
        setClickLogin(true);
        console.log("login");
      }
    };

    return (
      <a
        className="LoginBtn"
        style={{ backgroundColor: props.color, color: props.text }}
        href="#"
        onClick={handleClick}
      >
        {props.icon}
        {props.name}
      </a>
    );
  };

  return (
    <>
      <div className="upnavcontainer">
        <div id="logonav">
          <a href="">
            <img
              id="logo"
              src="https://1000logos.net/wp-content/uploads/2017/05/Reddit-logo.png"
              alt="logo"
            />
          </a>
        </div>
        <div id="searchnav">
          <input type="text" />
          <a href="">
            <SearchIcon
              id="searchbtn"
              style={{ fontSize: window.innerWidth < 600 ? 37 : 25 }}
            />
          </a>
        </div>
        <div className="appdownload">
          <Btn name="GetApp" color="white" text="black" icon={<QrCodeIcon />} />
          <div
            onClick={() => {
              setclosebtnlogin(true);
            }}
          >
            <Btn
              name="Login"
              color="#ff4500"
              text="white"
              icon={<LockOpenIcon />}
              fetchfun={props.isVisiblelogin}
            />
          </div>
        </div>

        <div id="login">
          <AppsMenu onClick={props.isVisiblelogin} />
        </div>
      </div>

      {/* {closebtnlogin?<Login/>:false} */}
      {closebtnlogin && <Login />}
      {clickgetapp ? <GetApp /> : false}
    </>
  );
}
