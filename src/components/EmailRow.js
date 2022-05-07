import React from "react";
import { Checkbox, IconButton } from "@material-ui/core";
import { LabelImportantOutlined, StarBorderOutlined } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import "../css/emailRow.css";

const EmailRow = ({ id, title, subject, description, time }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/mail")} className="emailRow">
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>
      <h3 className="emailRow__title">{title}</h3>
      <div className="emailRow__message">
        <h4>
          {subject}
          <span className="emailRow__description"> {description}</span>
        </h4>
      </div>
      <div className="emailRow__description">{time}</div>
    </div>
  );
};

export default EmailRow;
