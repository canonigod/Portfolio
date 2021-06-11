import React, { useState } from 'react'
import './About.scss'


const Tabs = () => {
    const [tab, setTab] = useState(1)

    const toggleTab = (index) => {
        setTab(index)
    }

    return (
        <div className="tabs">
            <ul className="nav nav-tabs" id="myTab" >
                <li className="nav-item" >
                    <button className={tab === 1 ? 'nav-link active' : 'nav-link '} id="skills-tab" onClick={ () => toggleTab(1) }>Skills</button>
                </li>
                <li className="nav-item" >
                    <button className={tab === 2 ? 'nav-link active' : 'nav-link '}id="experience-tab" onClick={ () => toggleTab(2) }>Experience</button>
                </li>
                <li className="nav-item" >
                    <button className={tab === 3 ? 'nav-link active' : 'nav-link '}id="education-tab" onClick={ () => toggleTab(3) }>Education & Certification</button>
                </li>
                </ul>
            <div className="tab-content" id="myTabContent">
                <div className={tab === 1 ? "tab-pane fade show active" : "tab-pane fade"} id="skills" >
                    <p className="tab-text">React, Vue JS, Typescript, Redux, Bootstrap, Material-UI,<br />
                    REST/RESTFUL APIs, HTML, CSS, SASS, JavaScript, jQuery,<br />
                    WordPress - <span className="type">Development <br/> Front-end</span></p>

                    <p className="tab-text">Laravel, PHP, MySQL <span className="type">Development <br/> Back-end</span></p>

                    <p className="tab-text">PhotoShop & Illustrator - <span className="type"> Designing <br/> Design and edits</span></p>
                </div>

                <div className={tab === 2 ? "tab-pane fade show active" : "tab-pane fade"} id="experience" >
                    <p className="tab-text"> Software Engineer - <span className="type"> Stridek Inc. <br/> 2021 - Current </span></p>

                    <p className="tab-text"> React Developer Intern - <span className="type"> Dianurse <br/> 2021 </span></p>

                    <p className="tab-text"> Front-End Developer - <span className="type"> EverCommerce<br/> 2020 - 2021</span></p>

                    <p className="tab-text"> Front-End Developer Jr. - <span className="type"> C.E. Hutton <br/> 2019-2020 </span></p>

                    <p className="tab-text"> Software Engineer Intern - <span className="type"> Enyosolutions<br/> 2019 </span></p>

                    <p className="tab-text"> Web Developer Freelancer - <span className="type"> Upwork<br/> </span> 2018-2020 </p>

                </div>
                <div className={tab === 3 ? "tab-pane fade show active" : "tab-pane fade"} id="education" >

                    <p className="tab-text"> Bachelor of Science in Computer Science - <span className="type"> Western Governors University<br/> 2021</span></p>

                    <p className="tab-text"> Cloud Computing - <span className="type"> IBM <br/> 2021 </span> </p>

                    <p className="tab-text"> Certificate of Programming Foundations JavaScipt, HTML and CSS - <span className="type"> Duke University <br/> 2020 </span> </p>

                    <p className="tab-text"> Front-end Development Bootcamp - <span className="type"> FLAG <br/> </span> 2018</p>

                    <p className="tab-text"> Portuguese, English, Spanish - <span className="type"> Fluent </span></p>

                </div>
            </div>
        </div>
    )
}

export default Tabs
