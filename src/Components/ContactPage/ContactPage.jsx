import React from 'react'
import Contact from '../../Shared/Components/Contact/Contact'
import HelmetComponent from '../Helmet/HelmetProvider'

function ContactPage() {
    return (
        <>
         <HelmetComponent title="Contact Us - International Conference on Technology Integration for Global Development" canonical={'https://ictigd.com/contact'} />
            <Contact />
        </>
    )
}

export default ContactPage
