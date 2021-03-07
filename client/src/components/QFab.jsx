import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import FlagIcon from "@material-ui/icons/Flag";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import SettingsBackupRestoreIcon from "@material-ui/icons/SettingsBackupRestore";
import FlagModal from "./FlagModal.jsx";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function QFab(props) {
  const classes = useStyles();
  console.log("QFAB PROPS", props);
  const [open, setOpen] = React.useState(false);
  const [counter, setCounter] = React.useState(props.currentQ.Score);
  const [hover, setHover] = React.useState("");
  const handleOpen = () => {
    setOpen(true);
  };

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div className={classes.root}>
      {open ? <FlagModal /> : null}
      <span
        onClick={handleOpen}
        onMouseOver={() => setHover("Flag")}
        onMouseOut={() => setHover("")}
      >
        <Fab color="secondary" aria-label="add">
          {hover === "Flag" ? "Flag" : <FlagIcon />}
        </Fab>
      </span>
      <span
        onClick={decrementCounter}
        onMouseOver={() => setHover("Down Vote")}
        onMouseOut={() => setHover("")}
      >
        <Fab color="primary" aria-label="edit">
          {hover === "Down Vote" ? "Down Vote" : <ThumbDownIcon />}
        </Fab>
      </span>
      {counter}
      {/* STILL HAVE ACCESS TO PROPS */}
      {/* {props.currentQ.Score} */}
      <span
        onClick={incrementCounter}
        onMouseOver={() => setHover("Up Vote")}
        onMouseOut={() => setHover("")}
      >
        <Fab color="primary" aria-label="edit">
          {hover === "Up Vote" ? "Up Vote" : <ThumbUpIcon />}
        </Fab>
      </span>
      <span
        onClick={() => props.getHardQuestion()}
        onMouseOver={() => setHover("Swap")}
        onMouseOut={() => setHover("")}
      >
        <Fab color="white" aria-label="edit">
          {hover === "Swap" ? "Swap" : <SettingsBackupRestoreIcon />}
        </Fab>
      </span>
    </div>
  );
}
