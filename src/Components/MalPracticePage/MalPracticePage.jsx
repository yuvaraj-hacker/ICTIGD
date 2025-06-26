import React from 'react'
import MalPractice from '../../Shared/Components/MalPractice/MalPractice'
import HelmetComponent from '../Helmet/HelmetProvider'

function MalPracticePage() {
    return (
        <>
            <HelmetComponent title="Malpractice - International Conference on Intelligent Systems and Computational Methods" />
            <MalPractice />
        </>
    )
}

export default MalPracticePage
