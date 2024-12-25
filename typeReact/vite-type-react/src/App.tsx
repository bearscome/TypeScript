import { FC } from "react";
import "./App.css";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Snow from "./components/Snow";

const App: FC = function () {
  return (
    <>
      <Snow
        width={"1%"}
        height={"1%"}
        count={100}
        durationTime={1}
        colorList={["green", "blue", "red", "white", "yellow", "purple"]}
      />

      <div>
        <Profile />
        <Login />
      </div>
    </>
  );
};

export default App;
