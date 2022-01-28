// -*- web -*-
//
// michael a.g. aïvázis <michael.aivazis@para-sim.com>
// (c) 1998-2022 all rights reserved


// get colors
import { theme } from '~/palette'


// publish
export default {
    // the overall box
    box: {
        display: "flex",
        overflow: "clip",
    },

    // the individual panels
    panel: {
        // the initial flex
        // for me; a flex basis of 100% seems to behave better than auto
        flex: "1 1 100%",
        // for my children
        overflow: "hidden",
        display: "flex",
    },

    // the inter-panel separator
    separator: {
        // the line
        rule: {
            flex: "0 0 auto",
            overflow: "visible",
            backgroundColor: "hsl(0deg, 0%, 15%, 0.5)",
            zIndex: 1,
        },

        // the handle
        handle: {
        },

        // state dependent styling
        colors: {
            hidden: "hsl(0deg, 0%, 25%, 0)",
            visible: "hsl(28deg, 30%, 25%, 0.5)",
        },
    },

    // when debugging, we show the panel size instead of its actual children; style the info
    extent: {
        // fonts
        fontFamily: "inconsolata",
        fontSize: "60%",

        // take up all available space
        width: "100%",
        height: "100%",

        // make it stand out
        color: theme.page.name,
        backgroundColor: "hsl(0, 20%, 7%)",
    },

}


// end of file
