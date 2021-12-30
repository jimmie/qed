// -*- web -*-
//
// michael a.g. aïvázis <michael.aivazis@para-sim.com>
// (c) 1998-2021 all rights reserved


// get colors
import { wheel, theme } from '~/palette'
// get the base styles
import base from '~/views/styles'


// the container
const flex = {
    // the overall flex container
    box: {
        flex: "1 1 auto",
        backgroundColor: "hsl(0deg, 0%, 10%)",
    },

    // individual panels
    panel: {
        // styling
        backgroundColor: "hsl(0deg, 0%, 5%, 1)",
        // for my children
        display: "flex",
        flexDirection: "column",
    },

    // the inter-panel separator
    separator: {
        // the line
        rule: {
            backgroundColor: "hsl(0deg, 0%, 15%, 0.5)",
        },
        // the handle
        handle: {
        },
    },
}

// the activity panels
const activityPanels = {
    // the panel
    panel: {
        // inherit
        ...flex.panel,
        // make it stand out a bit
        backgroundColor: "hsl(0deg, 0%, 7%, 1)",
        // set up the preferred initial width
        width: "350px",
        flex: "0 0 auto",
    },

    // the separator
    separator: {
        // inherit
        ...flex.separator,
    },

    header: {
        // make it stand out a bit
        backgroundColor: "hsl(0deg, 0%, 7%, 1)",
    },
}


// the panel with the known datasets
const datasets = {
    // inherit
    ...activityPanels,
}


// the panel with the rendering controls
const controls = {
    // inherit
    ...activityPanels,
}


// the blank view
const blank = {
    // the container
    nyi: {
        // inherit
        ...base.panel,
    },

    placeholder: {
        position: "relative",
        top: "50%",
        left: "50%",
        width: "100%",
        height: "400px",
        textAlign: "center",
        transform: "translate(-50%, -50%)",
    },

    icon: {
        // placement
        margin: "1.0em auto",
        width: "300px",
        height: "300px",
    },

    shape: {
        icon: {
            // stroke
            stroke: theme.page.name,
            strokeWidth: 3,
            // fill
            fill: "none",
        },
    },

    message: {
        fontFamily: "inconsolata",
        fontSize: "120%",
        textAlign: "center",
    },

}


const reader = {
    // for the tray
    tray: {
        box: {},
        header: {},
        title: {},
        items: {},
    },

    activeTray: {
        box: {},
        header: {},
        title: {
            color: theme.page.name,
        },
        items: {},
    },
}


// attributes
const attributes = {
    info: {
        fontSize: "60%",
        fontFamily: "rubik-light",
    },
    name: {
        display: "inline-block",
        width: "5em",
        textAlign: "right",
    },
    value: {},
    separator: {
        width: "1.5em",
    }
}


// channels
const channel = {
    box: {
        fontSize: "60%",
        fontFamily: "inconsolata",
        display: "flex",
        flexDirection: "row",
    },

    name: {
        base: {
            flex: 1,
            padding: "0.125em 0.0em 0.125em 7.5em",
            cursor: "pointer",
        },
        enabled: {
            color: wheel.gray.aluminum,
        },
        available: {
            color: theme.page.name,
        },
        active: {
            color: theme.page.name,
        },
    },
}


// the viewer tab
const tab = {
    // the container
    box: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: "1.6rem",
        backgroundColor: "hsl(0deg, 0%, 10%, 1)",
    },

    // the dismiss button
    dismiss: {
        // the container
        badge: {
            flex: 0,
            padding: "0.0rem 0.5rem",
            cursor: "pointer",
        },
    },

    // the name of the dataset
    dataset: {
        fontFamily: "rubik-medium",
        fontSize: "80%",
        textTransform: "uppercase",
        paddingTop: "0.1rem",
    },

    selector: {
        fontFamily: "inconsolata",
        // padding: "0.125rem 0.0rem",
    },

    separator: {
        fontFamily: "inconsolata",
        padding: "0.0rem 0.25rem",
    },
}


// publish
export default {
    attributes,
    blank,
    channel,
    controls,
    datasets,
    flex,
    reader,
    tab,
}


// end of file
