import React from 'react'
import './RightSidebar.css'
import comment from "../../assets/comment-alt-solid.png"
import pen from "../../assets/pen-solid.png"
import blackLogo from "../../assets/blacklogo.png"

function Widget() {
  return (
    <div className='widget'>
      <h4 > The Overflow Blog</h4>
      <div className='right-sidebar-div-1'>
      <div className='right-sidebar-div-2'>
        <img src={pen} alt="pen" />
        <p>Can software startups that need $$$ avoid venture capital?</p>
      </div>
      <div className='right-sidebar-div-2'>
         <img src={pen} alt="pen" />
        <p>How to prevent your new chatbot from giving away company secrets</p>
      </div>
      </div>
      <h4 > Featured on Meta</h4>
      <div className='right-sidebar-div-1'>
      <div className='right-sidebar-div-2'>
        <img src={comment} alt="pen" />
        <p>Testing a new version of Stack Overflow Jobs</p>
      </div>
      <div className='right-sidebar-div-2'>
         <img src={blackLogo} alt="pen" />
        <p>The return of Staging Ground to Stack Overflow</p>
      </div>
      <div className='right-sidebar-div-2'>
         <img src={blackLogo} alt="pen" />
        <p>The 2024 Developer Survey Is Live Should we burninate the [tax] tag?</p>
      </div>
      <div className='right-sidebar-div-2'>
         <img src={blackLogo} alt="pen" />
        <p>
Policy: Generative AI (e.g., ChatGPT) is banned</p>
      </div>
      
      </div>
      <h4 > Hot Meta Posts</h4>
      <div className='right-sidebar-div-1'>
      <div className='right-sidebar-div-2'>
       <p>38</p>
        <p>Why was this spam flag decline .yet the question marked as spam?</p>
      </div>
      <div className='right-sidebar-div-2'>
         <p>20</p>
        <p>What is the best course of action when a user has high enough rep to... </p>
      </div>
      <div className='right-sidebar-div-2'>
         <p>14</p>
        <p>Is a link to the "How to ask" help page a useful comment?</p>
      </div>
      </div>

    </div>
  )
}

export default Widget
