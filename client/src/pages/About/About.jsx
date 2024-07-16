import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import AboutMainbar from '../../components/AboutMainbar/AboutMainbar'
import "../../App.css"
function About({ slidein, handleslidein }) {
  return (
    
      <div className='home-container-1'>
        <LeftSidebar slidein={slidein} handleslidein={handleslidein}/>
        <div className='home-container-2'>
          <AboutMainbar/>
          <RightSidebar/>

        </div>

      </div>
   
  )
}

export default About
