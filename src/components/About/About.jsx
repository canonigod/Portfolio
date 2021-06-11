import React from 'react'
import './About.scss'
import aboutPic from '../images/About/about.jpg'
import Tabs from './Tabs'




const About = () => {
    return (
        <div id="about" className="py-5 bg-color-1">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <img src={aboutPic} alt="David Canonigo" />
                    </div>
                    <div className="col-md-7 px-5 py-3">
                        <div className="section-title">
                            <h2>About Me</h2>
                            <div className="description">
                                I'm David, I'm 24 years old, and a software engineer based in Tampa, FL. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences. I care deeply about building interfaces that are usable and pleasant for the most number of people possible. Something that I like to say is that at the end of the day we work with people and deliver products to people.
                            </div>
                            <Tabs />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
