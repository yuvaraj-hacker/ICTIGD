import React from 'react'
import Plagiarism from '../../Shared/Components/Plagiarism/Plagiarism'
import HelmetComponent from '../Helmet/HelmetProvider'

function PlagiarismPage() {
    return (
        <>
            <HelmetComponent title="Plagiarism - International Conference on Technology Integration for Global Development" />
            <Plagiarism />
        </>
    )
}

export default PlagiarismPage
