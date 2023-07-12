
import React from 'react'
import GridLayout from "react-grid-layout";

export default class MyFirstGrid extends React.Component {
    render() {
        // layout is an array of objects, see the demo for more complete usage
        const layout = [
            { i: "a", x: 0, y: 0, w: 3, h: 4, static: false },
            { i: "b", x: 3, y: 0, w: 3, h: 4, minW: 2, maxW: 3, maxH: 6},
            { i: "c", x: 6, y: 0, w: 3, h: 4, minW: 2, maxW: 3, maxH: 6 }
        ];
        return (
            <GridLayout
                className="layout"
                layout={layout}
                cols={12}
                rowHeight={30}
                width={1200}
            >
                
                <div 
                style={{
                    borderColor: "#FF0000",
                    borderStyle: "solid",
                    borderWidth: "1px",
                  }}
                   key="a"> CELL FOR CLOCK</div>
                <div 
                    style={{
                    borderColor: "#FF0000",
                    borderStyle: "solid",
                    borderWidth: "1px",
                  }}
                  key="b">CELL FOR CALENDAR</div>
                <div 
                    style={{
                    borderColor: "#FF0000",
                    borderStyle: "solid",
                    borderWidth: "1px",
                  }}
                  key="c">CELL FOR NEWS</div>
            </GridLayout>
        );
    }
}