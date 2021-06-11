import React from 'react'
import './Portfolio.scss'
import Colibri from '../images/Portfolio/colibri.png'
import Gm from '../images/Portfolio/gm.png'
import Stock from '../images/Portfolio/stock.png'

const Portfolio = () => {
    const recentWork = [
        {
            background: Colibri,
            title: 'Photoshop, HTML, CSS and JavaScript',
            subtitle: 'Website Design + Code',
            btn_text: 'View Live Site',
            btn_link: 'http://colibricontent.com/',
            btn_text_2: '',
            btn_link_2: ''
        },
        {
            background: Stock,
            title: 'React, TypeScript, Redux, Styled-Components',
            subtitle: 'Stock Tracker',
            btn_text: 'View Demo',
            btn_link: 'https://canonigod.github.io/stock-tracker/',
            btn_text_2: 'View Github',
            btn_link_2: 'https://github.com/canonigod/stock-tracker/tree/master'
        },
        {
            background: Gm,
            title: 'React, JavaScript',
            subtitle: 'Electric Car Fleet Management',
            btn_text: 'View Demo',
            btn_link: 'https://canonigod.github.io/car-map-login-dashboard/',
            btn_text_2: 'View Github',
            btn_link_2: 'https://github.com/canonigod/car-map-login-dashboard'
        },
    ]
    return (
        <div id="portfolio" className="bg-color-2">
            <div className="container text-center">
                <div className="row px-3">
                    <div className="col-md-12">
                        <h2>Some Of My Work</h2>
                        <p>Here are some projects built with different technology stacks.</p>
                    </div>
                    {
                        recentWork.map((work, index) => {
                            return (
                            <div key={index} className="col-md-6 col-lg-4 py-5" >
                                <div
                                    className="portfolio-bg"
                                    style={{  background: 'linear-gradient( rgba(0,0,0,.5), rgba(30,167,194) ), url(' + work.background + ') center no-repeat' }}>
                                    <div className="content">
                                        <div className="inner my-5">
                                            <p>{work.subtitle}</p>
                                            <h4>{work.title}</h4>
                                        </div>

                                        <div className="button">
                                            <a href={work.btn_link} target="_blank" className="portfolio-btn" rel="noreferrer">{work.btn_text}</a>
                                            {
                                                work.btn_text_2 ? <a href={work.btn_link_2} target="_blank" className="portfolio-btn_second" rel="noreferrer">{work.btn_text_2}</a>
                                                : ''
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        })
                    }
                    <div className="mx-auto py-5">
                        <a href="https://github.com/canonigod" target="_blank" className="github-portfolio-btn" rel="noreferrer">View Github Profile</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
