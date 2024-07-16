import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
import "../../App.css"
function Question({ slidein, handleslidein }) {
  return (
    
      <div className='home-container-1'>
        <LeftSidebar slidein={slidein} handleslidein={handleslidein}/>
        <div className='home-container-2'>
          <HomeMainbar/>
          <RightSidebar/>

        </div>

      </div>
   
  )
}

export default Question
