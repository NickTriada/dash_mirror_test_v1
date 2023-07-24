import React from "react";
import GridLayout from "react-grid-layout";
import ClockWidget from "~/features/ClockWidget";
import myImage from "~/img/clock_1.png";

console.log(myImage);

//import clock1 from '/img/clock_1.png';

export default class MyFirstGrid extends React.Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    const layout = [
      { i: "a", x: 0, y: 0, w: 3, h: 4, minW: 2, maxW: 3, maxH: 6 },
      { i: "b", x: 3, y: 0, w: 3, h: 4, minW: 2, maxW: 3, maxH: 6 },
      { i: "c", x: 6, y: 0, w: 3, h: 4, minW: 2, maxW: 3, maxH: 6 },
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

        <div
          style={{
            borderColor: "#FF0000",
            borderStyle: "solid",
            borderWidth: "1px",
          }}
          key="b"
        >
          CELL FOR CALENDAR
        </div>

        <div
          style={{
            borderColor: "#FF0000",
            borderStyle: "solid",
            borderWidth: "1px",
          }}
          key="c"
        >
          CELL FOR NEWS
        </div>
      </GridLayout>
    );
  }
}
