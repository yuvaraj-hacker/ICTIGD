import React from 'react'
import Guideline from '../../Shared/Components/AuthorGuideline/Guideline'
import HelmetComponent from '../Helmet/HelmetProvider'

function GuidelinePage() {
    return (
        <>
            <HelmetComponent title="Author Guidelines - International Conference on Technology Integration for Global Development" />
            <Guideline />
        </>
    )
}

export default GuidelinePage
