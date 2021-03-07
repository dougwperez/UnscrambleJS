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
  const [hover, setHover] = React.useState("");

  return (
    <div className={classes.root}>
      <span
        onMouseOver={() => setHover("Mute")}
        onMouseOut={() => setHover("")}
      >
        <Fab color="secondary" aria-label="edit">
          {hover === "Mute" ? "Mute" : <VolumeOffIcon />}
        </Fab>
      </span>
      <span
        onClick={() => {
          location.reload();
        }}
        onMouseOver={() => setHover("Main Menu")}
        onMouseOut={() => setHover("")}
      >
        <Fab color="primary" aria-label="add">
          {hover === "Main Menu" ? "Main Menu" : <HomeIcon />}
        </Fab>
      </span>
      {/* <span onClick={() => props.getHardQuestion()}>
        <Fab color="white" aria-label="edit">
          <SettingsBackupRestoreIcon />
        </Fab>
      </span> */}
    </div>
  );
}
