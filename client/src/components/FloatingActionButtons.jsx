import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import HomeIcon from "@material-ui/icons/Home";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import SettingsBackupRestoreIcon from "@material-ui/icons/SettingsBackupRestore";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function FloatingActionButtons(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab color="primary" aria-label="add">
        <HomeIcon
          onClick={() => {
            console.log("Clicked Home");
            return window.location.reload(false);
          }}
        />
      </Fab>
      <Fab color="secondary" aria-label="edit">
        <VolumeOffIcon />
      </Fab>
      <Fab color="white" aria-label="edit">
        <SettingsBackupRestoreIcon onClick={() => props.getHardQuestion()} />
      </Fab>
    </div>
  );
}
