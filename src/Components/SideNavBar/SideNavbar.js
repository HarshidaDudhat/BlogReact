import React from 'react'
import './SideNavbar.css'
import { FaFacebook } from 'react-icons/fa'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { BsPinterest } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'

function SideNavbar() {
  return (
    <div className="sideNavbar">
      {/* <div className="sideNavbarList"> */}
        <div className="sideNavbarItems">
          <span className="sideNavbarTitle">
            ABOUT ME
          </span>
          <img src='https://wallpapers.com/images/hd/cute-girl-vector-art-profile-picture-jhbu3wt713zj2bti.jpg' alt='' />
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available
          </p>
        </div>
        <div className="sideNavbarItems">
          <span className="sideNavbarTitle">
            CATEGORIES
          </span>
          <ul className='sideNavbarList'>
            <li className="sideNavListItem">LIFE</li>
            <li className="sideNavListItem">MUSIC</li>
            <li className="sideNavListItem">EARTH</li>
            <li className="sideNavListItem">TRAVEL</li>
            <li className="sideNavListItem">SPIRITUAL</li>
            <li className="sideNavListItem">SPORTS</li>
          </ul>
        </div>
        <div className="sideNavbarItems">
          <span className="sideNavbarTitle">
            FOLLOW ME
          </span>
          <ul className='sideNavIconList'>
            <FaFacebook className='sideNavIcons' />
            <AiFillTwitterCircle className='sideNavIcons' />
            <BsPinterest className='sideNavIcons' />
            <AiFillInstagram className='sideNavIcons' />

          </ul>
        </div>
      </div>

    
  )
}

export default SideNavbar
