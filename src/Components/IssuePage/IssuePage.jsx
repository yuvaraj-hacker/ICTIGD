import React from 'react'
import Issues from '../../Shared/Components/Issues/Issues'
import HelmetComponent from '../Helmet/HelmetProvider'

function IssuePage() {
    return (
        <>
            <HelmetComponent title="Editorial Board - International Conference on Technology Integration for Global Development" canonical={'https://ictigd.com/editorial-board'} />
            <Issues />
        </>
    )
}

export default IssuePage
