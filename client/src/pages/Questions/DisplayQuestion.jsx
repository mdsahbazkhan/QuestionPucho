import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import QuestionDetails from './QuestionDetails'

const DisplayQuestion = ({ slidein, handleslidein }) => {
  return (
    <div className='home-container-1'>
     <LeftSidebar slidein={slidein} handleslidein={handleslidein} />
    <div className='home-container-2'>
      <QuestionDetails/>
      
      <RightSidebar/>

    </div>

  </div>
  )
}

export default DisplayQuestion
