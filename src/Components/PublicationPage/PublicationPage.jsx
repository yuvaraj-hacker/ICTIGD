import React from 'react'
import Publication from '../../Shared/Components/Publication/Publication'
import HelmetComponent from '../Helmet/HelmetProvider'

function PublicationPage() {
    return (
        <>
            <HelmetComponent title="Key Dates - International Conference on Technology Integration for Global Development" canonical={'https://ictigd.com/key-dates'} />
            <Publication />
        </>
    )
}

export default PublicationPage
