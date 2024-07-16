import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import AboutMainbar from '../../components/AboutMainbar/AboutMainbar'
import "../../App.css"
function About() {
  return (
    
      <div className='home-container-1'>
        <LeftSidebar/>
        <div className='home-container-2'>
          <AboutMainbar/>
          <RightSidebar/>

        </div>

      </div>
   
  )
}

export default About
