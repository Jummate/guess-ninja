import React, { useState, useContext } from "react";
import { TbMusicOff, TbMusic } from "react-icons/tb";
import {
  MdOutlineNotificationsOff,
  MdOutlineNotifications,
} from "react-icons/md";
import { AppContext } from "../utils/context";

const styles = {
  position: "absolute",
  top: "15px",
  left: "20px",
  color: "#fff",
};

const SoundController = () => {
  const [toggleMusic, setToggleMusic] = useState(true);
  const [toggleSound, setToggleSound] = useState(true);
  const context = useContext(AppContext);

  const { contextDispatch } = context;

  return (
    <div style={styles}>
      <span
        style={{ marginRight: "7px" }}
        onClick={() => {
          setToggleMusic(!toggleMusic);
          contextDispatch({
            type: "TURN_MUSIC_OFF",
            payload: {
              turnBgMusicOff: toggleMusic,
            },
          });
        }}
      >
        {toggleMusic ? <TbMusicOff /> : <TbMusic />}
      </span>
      <span onClick={() => setToggleSound(!toggleSound)}>
        {toggleSound ? (
          <MdOutlineNotificationsOff />
        ) : (
          <MdOutlineNotifications />
        )}
      </span>
    </div>
  );
};

export default SoundController;
