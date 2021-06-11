import React from 'react'
import './Contact.scss'
import contact from '../images/Contact/contact.jpg'
import { FaLinkedin } from 'react-icons/fa';


const Contact = () => {
    return (
        <div id="contact" className="bg-color-2">
            <div className="container">
                <div className="row px-5">
                    <div className="col-md-6">
                        <h2>Contact Me</h2>
                        <p>Connect with on <a href="https://www.linkedin.com/in/david-canonigo/" target="_blank" rel="noreferrer">LinkedIn <FaLinkedin /></a></p>
                        <p>Email: <a href="mailto:dcanonigo17@gmail.com" target="_blank" rel="noreferrer">dcanonigo17@gmail.com</a></p>

                        <form
                            action="https://formspree.io/f/mnqlakyl"
                            method="POST"
                            >
                                <div className="row">
                                    <div className="col-md-12">
                                        <label>
                                        <input type="name" name="name" placeholder="Name" />
                                        </label>
                                    </div>
                                    <div className="col-md-12">
                                        <label>
                                        <input type="email" name="_replyto" placeholder="Email" />
                                        </label>
                                    </div>
                                    <div className="col-md-12">
                                        <label>
                                            <textarea name="message" placeholder="Message"></textarea>
                                        </label>
                                    </div>
                                </div>
                            <button type="submit">Send</button>
                        </form>
                    </div>
                    <div className="col-md-6 py-3">
                        <img src={contact} alt="David Canonigo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
