import React from 'react'
import './Hero.scss'
import Navbar from './Navbar'

const Hero = () => {


    return (
        <>
        <header>
            <Navbar />
            <div className="container d-flex align-items-center text-left">
                <div className="row d-justify-content-center align-items-center text-left">
                    <div className="col-lg-12">
                        <div className="inner">
                            <span>WELCOME TO MY WORLD</span>
                            <div className="title">
                                <h1>
                                    Hi, I'M DAVID CANONIGO
                                    <br/>
                                    <span className="colored-title">SOFTWARE ENGINEER</span>
                                    <br/>
                                    BASED IN TAMPA, FL</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
        </>
    )
}

export default Hero
