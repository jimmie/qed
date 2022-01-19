// -*- web -*-
//
// michael a.g. aïvázis <michael.aivazis@para-sim.com>
// (c) 1998-2022 all rights reserved


// externals
import React from 'react'

// project
// shapes
import { Split as Icon } from '~/shapes'
// widgets
import { Badge } from '~/widgets'

// locals
// hooks
import { useSplitView } from './useSplitView'
// styles
import styles from './styles'


// split a {view} into two
export const Split = ({ view }) => {
    // grab the hook that splits a {view}
    const splitView = useSplitView(view)
    // turn it into a handler that splits this {view}
    const split = (evt) => {
        // stop this event from bubbling up
        evt.stopPropagation()
        // and quash any side effects
        evt.preventDefault()
        // manage the {view} state
        splitView()
        // all done
        return
    }

    // assemble the controllers to hand my {badge}
    const behaviors = {
        onClick: split,
    }

    // mix my paint
    const paint = styles.split
    // render
    return (
        <Badge size={10} state="enabled" behaviors={behaviors} style={paint} >
            <Icon />
        </Badge>
    )
}


// end of file