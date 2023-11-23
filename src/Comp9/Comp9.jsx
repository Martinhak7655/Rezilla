import React from 'react'
import "./Comp9.css"
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { IoMdStar } from "react-icons/io";

const Comp9 = () => {
    return (
        <div>
            <div className='testimonial'>
                <div className='testimonial-around'>
                    <div className='testimonial-column'>
                        <h3 style={{ color: "#4361EE" }}>TESTIMONIALS</h3>
                        <h1 className='testimonial-h1'>Look What Our Customers Say!</h1>
                        <p className="testimonial-p1">Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque. </p>
                        <div className='testimonial-icons-around'>
                            <div>
                                <GoArrowLeft />
                            </div>
                            <div>
                                <GoArrowRight />
                            </div>
                        </div>
                    </div>
                    <div className='testimonial-div1'>
                        <p className='testimonial-p2'>I highly recommend Jodi J. Appleby. She was attentive to our needs and worked tirelessly to find us the perfect home. We couldn't be happier with our new place!</p>
                        <hr />
                        <div className='testimonial-div1-around'>
                            <div className='testimonial-div1-text1'>
                              <div className='testimonial-div1-text1-img'></div>
                              <b>Barbara D. Smith</b>
                            </div>
                            <div className='testimonial-div1-text2'>
                            <IoMdStar style={{color: "yellow"}} />
                            <IoMdStar style={{color: "yellow"}} />
                            <IoMdStar style={{color: "yellow"}} />
                            <IoMdStar style={{color: "yellow"}} />
                            <IoMdStar style={{color: "#D4D4D4"}} />
                            </div>
                        </div>
                    </div> 
                </div>
                <div className='testimonial-div2'>
                    <div className='testimonial-div2-img'></div>
                    <div className='testimonial-div2-column'>
                        <h1>Become a Agent.</h1>
                        <p style={{width: "344px"}}>Fusce venenatis tellus a felis scelerisque. venenatis tellus a felis scelerisque.</p>
                    </div>
                    <button className='testimonial-but'>Register Now</button>
                </div>
            </div>
        </div>
    )
}

export default Comp9