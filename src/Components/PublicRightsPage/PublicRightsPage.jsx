import React from 'react'
import PublicRights from '../../Shared/Components/PublicationRights/PublicRights'
import HelmetComponent from '../Helmet/HelmetProvider'

function PublicRightsPage() {
    return (
        <>
            <HelmetComponent title="Publication Rights - International Conference on Technology Integration for Global Development" />
            <PublicRights />
        </>
    )
}

export default PublicRightsPage
