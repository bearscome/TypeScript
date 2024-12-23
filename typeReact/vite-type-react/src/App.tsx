import { FC } from "react";
import "./App.css";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Snow from "./components/Snow";

const App: FC = function () {
  return (
    <>
      <div>
        <Profile />
        <Login />
      </div>
      <Snow width={100} height={100} count={20} />
    </>
  );
};

export default App;
