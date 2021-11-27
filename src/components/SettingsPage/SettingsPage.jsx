import React, { useContext } from "react";
import "./settingsPage.css";
import ReactSlider from "react-slider";
import SettingsContext from "../SettingsContext/SettingsContext";
import BackButton from "../BackButton/BackButton";

function SettingsPage() {
  const settingsInfo = useContext(SettingsContext);
  return (
    <div style={{ textAlign: "left" }}>
      <p className="settings-title">Settings</p>
      <label>work minutes: {settingsInfo.workMinutes}:00</label>
      <ReactSlider
        className={"slider"}
        thumbClassName={"thumb"}
        trackClassName={"truck"}
        value={settingsInfo.workMinutes}
        onChange={(newValue) => settingsInfo.setWorkMinutes(newValue)}
        min={1}
        max={120}
      />

      <label>break minutes: {settingsInfo.breakMinutes}:00</label>
      <ReactSlider
        className={"slider green"}
        thumbClassName={"thumb"}
        trackClassName={"truck"}
        value={settingsInfo.breakMinutes}
        onChange={(newValue) => settingsInfo.setBreakMinutes(newValue)}
        min={1}
        max={120}
      />
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <BackButton onClick={() => settingsInfo.setShowSettingsPage(false)} />
      </div>
    </div>
  );
}

export default SettingsPage;
