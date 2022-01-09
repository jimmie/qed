// -*- web -*-
//
// michael a.g. aïvázis <michael.aivazis@para-sim.com>
// (c) 1998-2022 all rights reserved


// externals
import React from 'react'
// routing
import { Outlet } from 'react-router-dom'

// project
// hooks
import { useActivityPanel } from '~/views'
// widgets
import { Flex } from '~/widgets'

// locals
// hooks
import { useViews } from './useViews'
import { useSetActiveView } from './useSetActiveView'
// components
import { Blank } from './blank'
import { Viewer } from './viewer'
// styles
import styles from './styles'


// the area
const Panel = () => {
    // grab the registered views
    const { views } = useViews()
    // the view activator
    const activate = useSetActiveView()
    // get the state of the activity panel
    const { activityPanel } = useActivityPanel()

    // paint mixing
    const datasetPaint = { ...styles.datasets }
    // if the activity panel is not visible hide it
    datasetPaint.panel.display = activityPanel ? "flex" : "none"

    // render
    return (
        <Flex.Box direction="row" style={styles.flex} >
            {/* panel with activity specific content, determined by the current route */}
            <Flex.Panel min={250} max={450} style={datasetPaint} >
                <Outlet />
            </Flex.Panel >

            { /* a blank panel when there are no datasets to render */}
            {views.length == 0 &&
                <Flex.Panel style={styles.flex} auto={true} >
                    <Blank />
                </Flex.Panel >
            }

            {/* otherwise, make a panel for each active view */}
            {views.map(({ dataset, channel }, view) =>
                <Flex.Panel
                    key={`${dataset}:${channel}:${view}`}
                    style={styles.flex} auto={true} onClick={activate(view)}
                >
                    <Viewer view={view} />
                </Flex.Panel >
            )}

        </Flex.Box >
    )
}


// context
import { VizProvider } from './context'
// turn the view into a context provider and publish
export const Viz = ({ }) => {
    // set up the context provider
    return (
        <VizProvider >
            <Panel />
        </VizProvider>
    )
}


// end of file
