import React from "react";
import { Link } from "react-router-dom";
import {
  School,
  VideoLibrary,
  QuestionAnswer,
  ImportContacts,
  AccountBox,
} from "@material-ui/icons";

const Menu = () => {
  return (
    <div className=" position-fixed menu mt-5">
      <div className="menu_box">
        <Link to="/dashboard/">
          <ImportContacts className="menu_icon" />
          <p>My Class</p>
        </Link>
      </div>
      <div className="menu_box">
        <Link to="/dashboard/videos">
          <VideoLibrary className="menu_icon" />
          <p>Videos</p>
        </Link>
      </div>
      <div className="menu_box">
        <Link to="/dashboard/undoubt">
          <QuestionAnswer className="menu_icon" />
          <p>Undoubt</p>
        </Link>
      </div>
      <div className="menu_box">
        <Link to="/dashboard/syllabus">
          <School className="menu_icon" />
          <p>Syllabus</p>
        </Link>
      </div>
      <div className="menu_box">
        <Link to="/dashboard/myid">
          <AccountBox className="menu_icon" />
          <p>My Id</p>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
