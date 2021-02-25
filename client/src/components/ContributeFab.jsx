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

export default function ContributeFab(props) {
  const classes = useStyles();
  console.log("QFAB PROPS", props);
  const [open, setOpen] = React.useState(false);
  const [counter, setCounter] = React.useState(0);

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
      <span onClick={handleOpen}>
        <Fab color="secondary" aria-label="add">
          <FlagIcon />
        </Fab>
      </span>
      <span onClick={decrementCounter}>
        <Fab color="primary" aria-label="edit">
          <ThumbDownIcon />
        </Fab>
      </span>
      {/* {props.currentQ.Score} */}
      {counter}
      <span onClick={incrementCounter}>
        <Fab color="primary" aria-label="edit">
          <ThumbUpIcon />
        </Fab>
      </span>
      <span>
        <Fab color="white" aria-label="edit">
          <SettingsBackupRestoreIcon />
        </Fab>
      </span>
    </div>
  );
}
