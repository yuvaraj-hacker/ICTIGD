import React from 'react'
import Copyrights from '../../Shared/Components/Copyrights/Copyrights'
import HelmetComponent from '../Helmet/HelmetProvider'

function CopyrightsPage() {
    return (
        <>
            <HelmetComponent title="Copyrights - International Conference on Intelligent Systems and Computational Methods" />
            <Copyrights />
        </>
    )
}

export default CopyrightsPage
