import React from 'react'
import './Single.css'
import SinglePost from '../SinglePost/SinglePost'
import SideNavbar from '../SideNavBar/SideNavbar'

function Single() {
  return (
    <div className='single'>
      <SinglePost/>
      <SideNavbar/>
    </div>
  )
}

export default Single
