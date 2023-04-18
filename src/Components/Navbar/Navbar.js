import React from 'react'
import './Navbar.css'

import { FaFacebook } from 'react-icons/fa'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { BsPinterest } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom'


function Navbar() {
    const user = false
    ;
    return (
        <div className='nav'>
            <div className='navLeft'>
                <FaFacebook className='navIcons' />
                <AiFillTwitterCircle className='navIcons' />
                <BsPinterest className='navIcons' />
                <AiFillInstagram className='navIcons' />

            </div>
            <div className="navCenter">
                <ul className="navList">
                    <li className="navListItems">
                        <Link className="link" to="/">
                            HOME
                        </Link>
                    </li>
                    <li className="navListItems">ABOUT</li>
                    <li className="navListItems">CONTACT</li>
                    <li className="navListItems">
                        <Link className="link" to="/write">
                            WRITE
                        </Link>
                    </li>
                    {user && <li className="navListItems">LOGOUT</li>}
                </ul>
            </div>
            <div className="navRight">
                {user ? (
                    <Link className="link" to="/settings">
                        <img
                            className="navProfileImage"
                            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                        />
                    </Link>
                ) : (
                    <ul className="navList">
                        <li className="navListItems">
                            <Link className="link" to="/login">
                                LOGIN
                            </Link>
                        </li>
                        <li className="navListItems">
                            <Link className="link" to="/register">
                                REGISTER
                            </Link>
                        </li>
                    </ul>
                )}
                <BsSearch className='navSearchIcon'/>
            </div>
        </div>
    )
}

export default Navbar
