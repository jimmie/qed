// -*- web -*-
//
// michael a.g. aïvázis <michael.aivazis@para-sim.com>
// (c) 1998-2022 all rights reserved


// externals
import React from 'react'

// project
// shapes
import { Eye as Shape } from '~/shapes'
// widgets
import { Badge } from '~/widgets'

// locals
// hooks
import { useGetViewportSync } from './useGetViewportSync'
import { useToggleViewportSync } from './useToggleViewportSync'
import { useSyncAllViewports } from './useSyncAllViewports'
// styles
import styles from './styles'


// display the datasets associated with this reader
export const Sync = ({ idx }) => {
    // look up the current sync state of the {viewport}
    const isSynced = useGetViewportSync(idx)
    // build the sync toggle
    const toggle = useToggleViewportSync(idx)
    // and the one that syncs all them
    const syncAll = useSyncAllViewports(idx)

    // my event handlers
    const behaviors = {
        // make a handler one that toggles the sync state
        onClick: (evt) => {
            // stop this event from bubbling up
            evt.stopPropagation()
            // quash the default behavior
            evt.preventDefault()
            // flip the state
            toggle()
            // all done
            return
        },
        // and another one that toggles all them to be like me
        onDoubleClick: (evt) => {
            // stop this event from bubbling up
            evt.stopPropagation()
            // quash the default behavior
            evt.preventDefault()
            // flip the state
            syncAll()
            // all done
            return
        },
    }

    // set my state
    const state = isSynced ? "selected" : "enabled"
    // mix my paint
    const paint = styles.sync
    // render
    return (
        <Badge size={16} state={state} behaviors={behaviors} style={paint} >
            <Shape />
        </Badge >
    )
}


// end of file