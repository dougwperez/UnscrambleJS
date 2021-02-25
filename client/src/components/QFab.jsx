import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import FlagIcon from "@material-ui/icons/Flag";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
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

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className={classes.root}>
      {open ? <FlagModal /> : null}
      <span onClick={handleOpen}>
        <Fab color="secondary" aria-label="add">
          <FlagIcon />
        </Fab>
      </span>
      <Fab color="white" aria-label="edit">
        <ThumbDownIcon />
      </Fab>
      {props.currentQ.Score}
      <Fab color="white" aria-label="edit">
        <ThumbUpIcon />
      </Fab>
    </div>
  );
}
