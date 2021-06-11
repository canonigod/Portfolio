import React from 'react'
import { FaFingerprint, FaLinkedinIn } from 'react-icons/fa';
import './Footer.scss'

const Footer = () => {
    return (
        <div id="footer" className="bg-color-1 ">
                    <div className="row justify-content-between px-5">
                        <div className="col-sm-12 col-md-4">
                            <p className="brand"><span><FaFingerprint /></span> David Canonigo</p>
                        </div>
                        <div className="col-sm-12 col-md-3">
                            <a href="https://www.linkedin.com/in/david-canonigo/" target="_blank" rel="noreferrer"> <FaLinkedinIn className="social-linkedin"/></a>
                        </div>
                        <div className="col-sm-12 col-md-5">
                            <p className="copyright">Copyright © 2021 David Canonigo. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
    )
}

export default Footer
