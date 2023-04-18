import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>

            </div>
            <img className='headerImg' src='https://img.freepik.com/free-photo/office-table-with-cup-coffee-keyboard-notepad_1220-4618.jpg?w=1380&t=st=1681456127~exp=1681456727~hmac=4db9c1ab2fde09e683067929cfb60976b8b69c33c32e626da686268fd2f35404' alt='' />
        </div>
    )
}

export default Header
