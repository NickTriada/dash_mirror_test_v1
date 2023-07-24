import myImage from "~/img/clock_1.png";
// import { format } from "date-fns";
import { useEffect, useState } from "react";
import { format as BBLKJ } from "date-fns";

const useTime = () => {
  const [time, setTime] = useState("ABC");
  const [date, setDate] = useState("ABC");

  useEffect(() => {
    const interval = setInterval(() => {
      const d = new Date();
      setTime(BBLKJ(d, "HH:hh:ss"));
      setDate(BBLKJ(d, "dd MMMM Y"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return [time, date];
};

export default function ClockWidget() {
  const [time, date] = useTime();

  return (
    <div className="border-2 border-solid border-red-800 bg-slate-800 text-white">
      <p>{time}</p>
      <p>{date}</p>
      <h1>Welcome to My React App</h1>
      {/* <img src={myImage} alt="My Image" /> */}
      {/* <img src="/img/clock_1.png" alt="clock" /> */}
    </div>
  );
}
