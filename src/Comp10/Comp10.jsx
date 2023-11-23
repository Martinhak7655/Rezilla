import React from 'react'
import "./Comp10.css"
import { FaHouseCircleCheck } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";

const Comp10 = () => {
    return (
        <div>
            <div className='footer'>
                <div className="footer-column">
                    <div className='footer-flex'>
                        <FaHouseCircleCheck className='footer-icons1' />
                        <b>Rezilla</b>
                    </div>
                    <b style={{ width: "200px" }}>2728 Hickory StreetSalt
                        Lake City, UT 84104</b>
                    <div className='footer-flex'>
                        <BsTelephone />
                        <b>+1 206-214-2298</b>
                    </div>
                    <div className='footer-flex'>
                        <MdOutlineMailOutline />
                        <b>support@rezilla.com</b>
                    </div>
                </div>
                <div className="footer-column2">
                    <h2>Quick Links</h2>
                    <p style={{ width: "134px" }}>
                        <p>Home</p>
                        <p>About</p>
                        <p>Listings</p>
                        <p>Services</p>
                        <p>Blogs</p>
                        <p>Become a Agent</p>
                    </p>
                </div>
                <div className="footer-column3">
                    <h3>Discovery</h3>
                    <p style={{ width: "106px" }}>
                        <p>Canada</p>
                        <p>United States</p>
                        <p>Germany</p>
                        <p>Africa</p>
                        <p>India</p>
                    </p>
                </div>
                <div className="footer-column">
                    <h3 style={{width: "254px"}}>Subscribe to our Newsletter!</h3>
                    <div className='email-acces'>
                      <b>Email Acces</b>
                      <FaArrowRightLong className='footer-icons1' />
                    </div>     
                    <b>Follow Us on</b>
                    <div className='footer-flex2'>
                    <FaLinkedinIn />
                    <FaFacebookF />
                    <PiInstagramLogoFill />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comp10