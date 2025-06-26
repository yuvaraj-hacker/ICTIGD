import React from 'react'
import Guideline from '../../Shared/Components/AuthorGuideline/Guideline'
import HelmetComponent from '../Helmet/HelmetProvider'

function GuidelinePage() {
    return (
        <>
            <HelmetComponent title="Author Guidelines - International Conference on Intelligent Systems and Computational Methods" />
            <Guideline />
        </>
    )
}

export default GuidelinePage
