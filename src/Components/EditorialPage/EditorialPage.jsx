import React from 'react'
import EditorialBoard from '../../Shared/Components/EditorialBoard/EditorialBoard'
import HelmetComponent from '../Helmet/HelmetProvider'

function EditorialPage() {
    return (
        <>
            <HelmetComponent title="Organizing Committee - International Conference on Technology Integration for Global Development" canonical={'https://ictigd.com/organizing-committee'} />
            <EditorialBoard />
        </>
    )
}

export default EditorialPage
