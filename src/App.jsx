import "./App.css";
import SettingsPage from "./components/SettingsPage/SettingsPage";
import Timer from "./components/timer/Timer";
import { useState } from "react";
import SettingsContext from "./components/SettingsContext/SettingsContext";

function App() {
  const [showSettingsPage, setShowSettingsPage] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(30);
  const [breakMinutes, setBreakMinutes] = useState(5);

  return (
    <main>
      <SettingsContext.Provider
        value={{
          showSettingsPage,
          setShowSettingsPage,
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
        }}
      >
        {showSettingsPage ? <SettingsPage /> : <Timer />}
      </SettingsContext.Provider>
    </main>
  );
}

export default App;
