import React from 'react'
import PublicRights from '../../Shared/Components/PublicationRights/PublicRights'
import HelmetComponent from '../Helmet/HelmetProvider'

function PublicRightsPage() {
    return (
        <>
            <HelmetComponent title="Publication Rights - International Conference on Intelligent Systems and Computational Methods" />
            <PublicRights />
        </>
    )
}

export default PublicRightsPage
