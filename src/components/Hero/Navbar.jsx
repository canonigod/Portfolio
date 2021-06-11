import React, { useState } from 'react'
import { FaFingerprint, FaBars, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';


const Navbar = () => {
    const [active, setActive] = useState(null);
    const [showMenu, setShowMenu] = useState(false);
    const [showMmenu, setShowMmenu] = useState(false);
    const [scrollNav, setScrollNav] = useState(false);
    const menuLinks = [
        {
            name: 'About',
            path: 'about'
        },
        {
            name: 'Portfolio',
            path: 'portfolio'
        },
        {
            name: 'Coding Challenges',
            path: 'coding'
        },
        {
            name: 'Contact',
            path: 'contact'
        },
    ]

    // if(showMenu){
    //     <AiOutlineClose class="mmenu d-sm-block d-lg-none mx-5" onClick={() => setShowMenu(false)}/>
    // }

    const handleMMenu = () => {
        setShowMenu(!showMenu);
        setShowMmenu(!showMmenu);
    }

    const fixedNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        }
        else{
            setScrollNav(false)
        }
    }

window.addEventListener('scroll', fixedNav)
    return (
        <>
        <div className={ scrollNav ? 'container-wrapper scroll' : 'container-wrapper'}>
            <nav className="d-flex align-items-center">
                <h1 className="brand"><span><FaFingerprint /></span> David Canonigo</h1>
                <ul className={showMenu ? 'mmenu' : 'd-flex desktop-menu'}>
                {
                        menuLinks.map((menu, index) => {
                            return (
                            <li key={index} className='d-sm-none d-lg-block desktop-nav' >
                                <a
                                    href={`#${menu.path}`}
                                    className={`${active === menu.name && 'active'}`}
                                    onClick={() => setActive(menu.name)} >
                                    {menu.name}
                                </a>
                            </li>
                            )
                        })
                    }
                    <li className="d-sm-none d-lg-block linkedin-desktop">
                    <a href="https://www.linkedin.com/in/david-canonigo/" target="_blank" rel="noreferrer"> <FaLinkedinIn /></a>
                    </li>

                { !showMenu ? <FaBars className="d-sm-block d-lg-none  mx-5" onClick={handleMMenu}/> :
                 showMenu ? <AiOutlineClose className="close-btn" onClick={(handleMMenu)}/> : '' }
                    {
                        showMmenu ? menuLinks.map((menu, index) => {
                            return (
                            <li key={index} className='d-lg-none mobile-menu' >
                                <a
                                    href={`#${menu.path}`}
                                    className={`${active === menu.name && 'active'}`}
                                    onClick={() => setActive(menu.name)} >
                                    {menu.name}
                                </a>
                            </li>
                            )
                        })

                        : ''
                    }


                </ul>

            </nav>
        </div>
        </>
    )
}

export default Navbar
