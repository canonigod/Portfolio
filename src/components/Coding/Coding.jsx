import React from 'react'
import './Coding.scss'
import coding from '../images/Coding/coding.png'


const Coding = () => {
    const recentWork = [
        {
            background: coding,
            title: 'React',
            subtitle: 'Famous FizzBuzz Challenge',
            btn_text: 'View Demo',
            btn_link: 'https://canonigod.github.io/fizzbuzz',
            btn_text_2: 'View Github',
            btn_link_2: 'https://github.com/canonigod/fizzbuzz/tree/master'
        },

    ]
    return (
        <div id="coding" className="bg-color-1">
            <div className="container text-center">
                <div className="row px-3">
                    <div className="col-md-12">
                        <h2>Coding Challenges</h2>
                        <p>Some of the famous coding challenges resolved</p>
                    </div>
                    {
                        recentWork.map((work, index) => {
                            return (
                            <div key={index} className="col-md-12 col-lg-12 py-5" >
                                <div
                                    className="portfolio-bg"
                                    style={{  background: 'linear-gradient( rgba(0,0,0,.5), rgba(0,0,0, .5) ), url(' + work.background + ') center no-repeat' }}>
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
                    <div className="mx-auto py-5 col-md-12">
                        <a href="https://github.com/canonigod" target="_blank" className="github-portfolio-btn" rel="noreferrer">View Github Profile</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coding
