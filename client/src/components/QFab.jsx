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
  const [counter, setCounter] = React.useState(props.currentQ.Score);
  const [open, setOpen] = React.useState(false);
  const [hover, setHover] = React.useState("");
  const [increase, setIncrease] = React.useState(true);
  const [decrease, setDecrease] = React.useState(true);
  const handleOpen = () => {
    setOpen(true);
  };

  const incrementCounter = () => {
    if (increase) {
      setCounter(counter + 1);
      setIncrease(false);
      setDecrease(true);
    } else {
      null;
    }

    if (props.difficulty === "Beginner") {
      props.updateScore("easy", props.currentQ._id, counter + 1);
    } else if (props.difficulty === "Intermediate") {
      props.updateScore("medium", props.currentQ._id, counter + 1);
    }
  };

  const decrementCounter = () => {
    if (decrease) {
      setCounter(counter - 1);
      setDecrease(false);
      setIncrease(true);
    } else {
      null;
    }
  };

  const swapDifficultyRefresh = () => {
    // console.log(props.difficulty);
    if (props.difficulty === "Advanced") {
      props.getHardQuestion();
    } else if (props.difficulty === "Intermediate") {
      props.getMediumQuestion();
    } else {
      props.getEasyQuestion();
    }
  };

  return (
    <div className={classes.root}>
      {/* FIX INCREMENT */}
      {/* <h3>Score: {props.currentQ.Score}</h3> */}
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
        // onClick={() => props.getHardQuestion()}
        onClick={swapDifficultyRefresh}
        // onClick={swapTimerRefresh}
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
