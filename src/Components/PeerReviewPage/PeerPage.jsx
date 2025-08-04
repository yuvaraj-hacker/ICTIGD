import React from 'react'
import PeerReview from '../../Shared/Components/Peer-Review/PeerReview'
import HelmetComponent from '../Helmet/HelmetProvider'

function PeerPage() {
    return (
        <>
            <HelmetComponent title="Conference Tracks - International Conference on Technology Integration for Global Development" canonical={'https://ictigd.com/conference-tracks'} />
            <PeerReview />
        </>
    )
}

export default PeerPage
