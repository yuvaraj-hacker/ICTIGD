import React from 'react'
import Abstracting from '../../Shared/Components/Abstracting/Abstracting'
import HelmetComponent from '../Helmet/HelmetProvider'

function AbstractingPage() {
    return (
        <>
            <HelmetComponent title="Paper Submission - International Conference on Technology Integration for Global Development" canonical={'https://ictigd.com/paper-submission'} />
            <Abstracting />
        </>
    )
}

export default AbstractingPage
