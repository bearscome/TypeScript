import { FC, useState } from "react";
import "./App.css";
import Snow from "./components/Snow";

const App: FC = function () {
  const [width, setWidth] = useState<number>(1);
  const [height, setHeight] = useState<number>(1);
  const [duration, setDuration] = useState<number>(1);
  const [count, setCount] = useState<number>(100);
  const [reset, setReset] = useState<boolean>(false);

  return (
    <>
      <div>
        <Snow
          width={`${width}%`}
          height={`${height}%`}
          count={count}
          durationTime={duration}
          colorList={["green", "blue", "red", "white", "yellow", "purple"]}
          reset={reset}
        />

        <div
          style={{
            position: "absolute",
            bottom: "10px",
            zIndex: 1,
          }}
        >
          <label htmlFor="width">width( {width}% )</label>
          <input
            id="width"
            type={"range"}
            min={1}
            max={100}
            value={width}
            onChange={(v) => {
              setWidth(+v.target.value);
            }}
          />
          <label htmlFor="height">height( {height}% )</label>
          <input
            id="height"
            type={"range"}
            min={1}
            max={100}
            value={height}
            onChange={(v) => {
              setHeight(+v.target.value);
            }}
          />
          <label htmlFor="duration">duration( {duration} second )</label>
          <input
            id="duration"
            type={"range"}
            value={duration}
            onChange={(v) => {
              setDuration(+v.target.value);
            }}
          />
          <label htmlFor="duration">count( {count} )</label>
          <input
            id="count"
            type={"range"}
            value={count}
            min={1}
            max={1000}
            onChange={(v) => {
              setCount(+v.target.value);
            }}
          />
          <button onClick={() => setReset(!reset)}>reset</button>
        </div>
      </div>
    </>
  );
};

export default App;
