import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import FlagIcon from "@material-ui/icons/Flag";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function QFab() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab color="secondary" aria-label="add">
        <FlagIcon
          onClick={() => {
            return alert("FLAGGED");
          }}
        />
      </Fab>
      <Fab color="white" aria-label="edit">
        <ThumbDownIcon />
      </Fab>
      5
      <Fab color="white" aria-label="edit">
        <ThumbUpIcon />
      </Fab>
    </div>
  );
}
