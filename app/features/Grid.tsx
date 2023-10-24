import React, { useEffect, useState } from "react";
import GridLayout from "react-grid-layout";
import ClockWidget from "~/features/ClockWidget";
import CalendarWidget from "~/features/CalendarWidget";
import myImage from "~/img/clock_1.png";
import useRss from "~/features/useRss";

console.log(myImage);

//import clock1 from '/img/clock_1.png';

export default function MyFirstGrid() {
  const rssFeed = useRss();
  const [page, setPage] = useState<number>(1);
  const limit = 5;
  const start = (page - 1) * limit;
  const finish = start + limit;
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
  ];
  // /workspace/dash_mirror_test_v1/app/routes/img/clock_1.png
  // https://reactjs.org/logo-og.png
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
      </div>

      <div key="b">
        <CalendarWidget />
      </div>

      <div key="c">
        <button
          onClick={() =>
            setPage((p) => {
              console.log(p);
              return p + 1;
            })
          }
        >
          xx
        </button>
        {rssFeed === null ? "loading..." : <>{rssFeed.title}</>}
        {rssFeed?.items?.slice(start, finish).map((x) => {
          return (
            <div key={x.id}>
              <h2>{x.title}</h2>
              <p>{x.content}</p>
            </div>
          );
        })}
        CELL FOR NEWS
      </div>
    </GridLayout>
  );
}
