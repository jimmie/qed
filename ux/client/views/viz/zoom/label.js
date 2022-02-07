// -*- web -*-
//
// michael a.g. aïvázis <michael.aivazis@para-sim.com>
// (c) 1998-2022 all rights reserved


// external
import React from "react"

// locals
// hooks
import { useZoom } from "../viz/uzeZoom"
// styles
import styles from './styles'


// the legend of the zoom controller
// by default, it is drawn in a (1000, 500) box
export const Label = ({ state, value, x, y }) => {
    // get the zoom levels
    const { activeViewport, zoom: zoomLevels, setZoom } = useZoom()
    // look up the zoom level of the active viewport
    const zoom = zoomLevels[activeViewport]

    // extra paint for the highlighter
    const [polish, setPolish] = React.useState(false)

    // check whether i'm the current value
    if (state === "enabled" && zoom === value) {
        // and if so, upgrade my state
        state = "selected"
    }

    // my controllers
    let behaviors = {
        // turn the highlight off when the cursor leaves my area
        onMouseLeave: () => setPolish(false),
    }

    // if i'm enabled
    if (state === "enabled") {
        // add the highlighter to my behaviors
        behaviors = {
            ...behaviors,
            // when the cursor enters my area
            onMouseEnter: () => setPolish(true),
        }
    }

    // mix my paint
    const paint = styles.label({ state, polish })

    // render
    return (
        <text x={x} y={y} {...behaviors} style={paint}>
            {value}
        </text>
    )
}


// end of file
