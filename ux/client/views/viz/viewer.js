// -*- web -*-
//
// michael a.g. aïvázis <michael.aivazis@para-sim.com>
// (c) 1998-2022 all rights reserved


// externals
import React from 'react'

// project
// widgets
import { Info, Mosaic } from '~/widgets'

// locals
// components
import { Tab } from './tab'
// hooks
import { useViews } from './useViews'
import { useRegisterViewport } from './useRegisterViewport'
// styles
import styles from './styles'


// display the datasets associated with this reader
export const Viewer = ({ view }) => {
    // get the list of views
    const { views } = useViews()
    // register my viewport
    const viewport = useRegisterViewport()

    // get my view info
    const { reader, dataset } = views[view]
    // and unpack what i need
    const { uri } = reader
    const { datatype, shape, tile } = dataset

    // mix my paint
    const mosaicStyle = {
        // for the overall box
        box: {
            // base
            ...styles.mosaic.box,
        },
        // for the mat
        mat: {
            // base
            ...styles.mosaic.mat,
        },
        // for the data viewport
        mosaic: {
            // base
            ...styles.mosaic.mosaic,
            // resize to the dataset shape
            width: `${shape[1]}px`,
            height: `${shape[0]}px`,
        },
    }

    // render
    return (
        <>
            {/* the title bar with the dataset description and the controls */}
            <Tab view={view} viewport={viewport} />
            {/* identifying metadata */}
            <Info name="uri" value={uri} style={styles.attributes} />
            <Info name="type" value={datatype} style={styles.attributes} />
            <Info name="shape" value={shape.join(" x ")} style={styles.attributes} />
            <Info name="tile" value={tile.join(" x ")} style={styles.attributes} />

            {/* the data viewport */}
            <div ref={viewport} style={mosaicStyle.box} >
                {/* the tile mosaic */}
                <Mosaic raster={shape} tile={tile} style={mosaicStyle} />
            </div>
        </>
    )
}


// end of file