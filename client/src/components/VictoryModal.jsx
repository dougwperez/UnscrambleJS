import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "crimson",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function VictoryModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { minutes, seconds, milliseconds } = props.timeObj;
  console.log("Seconds", seconds);
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">
              <div>Great Work! You solved this challenge!</div>
              <br />
              <div>
                <div>Minutes: {minutes}</div>
                <br />
                <div>Seconds: {seconds}</div>
                <br />
                <div>Milliseconds: {milliseconds} </div>
              </div>
            </h2>
            <p id="transition-modal-description">
              {/* Great Job! Enjoy JS Unscramble, why not contribute code? */}
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
