import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import FlagIcon from "@material-ui/icons/Flag";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import SettingsBackupRestoreIcon from "@material-ui/icons/SettingsBackupRestore";

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

  return (
    <div className={classes.root}>
      <span
        onClick={() => {
          return alert("FLAGGED");
        }}
      >
        <Fab color="secondary" aria-label="add">
          <FlagIcon />
        </Fab>
      </span>
      <Fab color="primary" aria-label="edit">
        <ThumbDownIcon />
      </Fab>
      {/* {props.currentQ.Score} */}12
      <Fab color="primary" aria-label="edit">
        <ThumbUpIcon />
      </Fab>
      <Fab color="white" aria-label="edit">
        <SettingsBackupRestoreIcon />
      </Fab>
    </div>
  );
}
