import React from 'react'
import "./Comp7.css"

const Comp7 = () => {
    return (
        <div>
            <div className='neighborhood'>
                <h2 style={{ color: "#4361EE" }}>AREAS ACROSS THE TOWN</h2>
                <h1>Neighborhood Properties</h1>
                <div className='neighborhood-around'>
                    <div className='neighborhood-div1'>
                        <h2 style={{ paddingTop: "180px", paddingLeft: "40px", color: "white" }}>216</h2>
                        <b style={{ paddingLeft: "40px", color: "white" }} >New York City, NY</b>
                    </div>
                    <div className='neighborhood-div2'>
                        <h2 style={{ paddingTop: "180px", paddingLeft: "40px", color: "white" }}>141</h2>
                        <b style={{ paddingLeft: "40px", color: "white" }} >Houston, TX</b>
                    </div>
                    <div className='neighborhood-div3'>
                        <h2 style={{ paddingTop: "180px", paddingLeft: "40px", color: "white" }}>212</h2>
                        <b style={{ paddingLeft: "40px", color: "white" }} >San Diego, CA</b>
                    </div>
                </div>
                <div className='neighborhood-around2'>
                    <div className='neighborhood-div4'>
                        <h2 style={{ paddingTop: "180px", paddingLeft: "40px", color: "white" }}>183</h2>
                        <b style={{ paddingLeft: "40px", color: "white" }} >Philadelphia, PA</b>
                    </div>
                    <div className='neighborhood-div5'>
                        <h2 style={{ paddingTop: "180px", paddingLeft: "40px", color: "white" }}>112</h2>
                        <b style={{ paddingLeft: "40px", color: "white" }} >San Francisco, CA</b>
                    </div>
                </div>
                <h3 style={{ color: "#4361EE" }}>Introduce yourself to</h3>
                <h1>Our Team of Experts</h1>
                <div className='neighborhood-around3'>
                    <div className='neighborhood-div6'>
                        <div className='neighborhood-img1'></div>
                        <h2>Brendon M</h2>
                        <p style={{ color: "#4361EE" }}>CEO & Founder</p>
                    </div>
                    <div className='neighborhood-div6'>
                        <div className='neighborhood-img2'></div>
                        <h2>Jodi J. Appleby</h2>
                        <p style={{ color: "#4361EE" }}>Real Estate Developer</p>
                    </div>
                    <div className='neighborhood-div6'>
                        <div className='neighborhood-img3'></div>
                        <h2>Justin S. Meza</h2>
                        <p style={{ color: "#4361EE" }}>Listing Agent</p>
                    </div>
                    <div className='neighborhood-div6'>
                    <div className='neighborhood-img4'></div>
                        <h2>Susan S. Smith</h2>
                        <p style={{ color: "#4361EE" }}>Buyer's Agent</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comp7