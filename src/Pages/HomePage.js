import React from 'react'
import './HomePage.css'
import Header from '../Components/Header/Header'
import Posts from '../Components/Posts/Posts'
import SideNavBar from '../Components/SideNavBar/SideNavbar'

function HomePage() {
  return (
    <React.Fragment>
      <Header />
      <div className='homePage'>
        <Posts />
        <SideNavBar />
      </div>
    </React.Fragment>
  )
}

export default HomePage;
