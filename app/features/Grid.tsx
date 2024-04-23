import React, { useEffect, useState } from "react";
import GridLayout from "react-grid-layout";
import ClockWidget from "~/features/ClockWidget";
import CalendarWidget from "~/features/CalendarWidget";
import myImage from "~/img/clock_1.png";
import useRss from "~/features/useRss";
import WeatherWidget from "~/features/WeatherWidget";
// import WeatherWidget from "@eggtronic/react-weather-widget";

import Map from "./Map"; 

console.log(myImage);

//import clock1 from '/img/clock_1.png';(
type ButtonVariant = "primary" | "secondary";
type ButtonType = {
  variant: ButtonVariant;
  onClick: () => void;
  children: React.ReactNode;
};

function getButtonVariant(variant: ButtonVariant): string {
  switch (variant) {
    case "primary":
      return "border-2 border-solid border-red-500 bg-slate-300";
    case "secondary":
      return "border-2 border-solid border-blue-500 bg-slate-300";
  }
}

const Button = ({ onClick, variant, children }: ButtonType) => {
  return (
    <button className={getButtonVariant(variant)} onClick={onClick}>
      {children}
    </button>
  );
};

export default function MyFirstGrid() {
  const rssFeed = useRss();
  const [page, setPage] = useState(1);
  const limit = 5;
  const start = (page - 1) * limit;
  const finish = start + limit;
  let xn = rssFeed?.items.length ?? 0;
  const maxpage = Math.round(xn / limit);
  // console.log(rssFeed);
  console.log(start, finish);

  useEffect(() => {
    const timer = setInterval(() => {
      setPage((p) => p++);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // layout is an array of objects, see the demo for more complete usage
  const layout = [
    { i: "a", x: 0, y: 0, w: 4, h: 5, minW: 4, maxW: 6, maxH: 6 },
    { i: "b", x: 4, y: 0, w: 4, h: 5, minW: 4, maxW: 6, maxH: 6 },
    { i: "c", x: 8, y: 0, w: 4, h: 5, minW: 4, maxW: 6, maxH: 6 },
    { i: "d", x: 8, y: 10, w: 4, h: 6, minW: 4, maxW: 6, maxH: 6 },
  ];

  // function abc(x) {
  //   return 1
  // }

  // const abcd = (x) => { return 2 }

  const prevPage = () =>
    setPage((p) => {
      let nextP = p <= 1 ? maxpage : p - 1;
      return nextP;
    });

  const nextPage = () =>
    setPage((p) => {
      let nextP = maxpage <= p ? 1 : p + 1;
      return nextP;
    });

  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={30}
      width={1200}
    >
      <div key="a">
        <ClockWidget />
        <Map
          origin="200 S Third St, San Jose, CA"
          destination="47400 Kato Rd, Fremont, CA"
        />
      </div>

      <div key="b">
        <CalendarWidget />
      </div>

      <div key="c">
        <Button variant="primary" onClick={prevPage}>
          &lt;
        </Button>
        <Button variant="secondary" onClick={nextPage}>
          &gt;
        </Button>
        {rssFeed === null ? "loading..." : null}
        {rssFeed?.items?.slice(start, finish).map((x) => {
          return (
            <div key={x.id}>
              <h2>{x.title}</h2>
              <p>{x.content}</p>
            </div>
          );
        })}
      </div>

      <div key="d">
        <WeatherWidget />
        
      </div>
    </GridLayout>
  );
}
