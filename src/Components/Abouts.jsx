import React from 'react'
import About from '../Shared/Components/About/About'
import HelmetComponent from './Helmet/HelmetProvider'

function Abouts() {
  return (
    <>
      <HelmetComponent title="About - International Conference on Technology Integration for Global Development" canonical={'https://ictigd.com/about'} />
      <About />
    </>
  )
}

export default Abouts