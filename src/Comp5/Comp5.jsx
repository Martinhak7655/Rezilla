import React from 'react'
import './Comp5.css'
import { RiHomeWifiFill } from 'react-icons/ri';
import { FaRegUserCircle } from 'react-icons/fa';
import { AiFillFire } from 'react-icons/ai';
import { FaBed } from 'react-icons/fa';
import { FaBath } from 'react-icons/fa';
import { BsFillHouseDoorFill } from 'react-icons/bs';


const Comp5 = () => {
    return (
        <div>
            <div className='properties'>
                <p>Trusted by 100+ Companies across the globe! </p>
                <div className='properties-logo'>
                    <div className='logo-div'></div>
                    <div className='logo-div2'></div>
                    <div className='logo-div3'></div>
                    <div className='logo-div4'></div>
                    <div className='logo-div5'></div>
                    <div className='logo-div6'></div>
                </div>
                <div className='assisting'>
                    <div className='assisting-column'>
                        <h3 style={{ color: "#4361EE" }}>Who are we</h3>
                        <h1 className='assisting-text'>Assisting individuals in locating the appropriate real estate.</h1>
                        <p className='assisting-text2'>Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac malesuada leo volutpat.</p>
                        <div className='assisting-div1'>
                            <RiHomeWifiFill style={{ color: 'blue', fontSize: "50px" }} />
                            <div className='assisting-div1-column'>
                                <b style={{ color: "blue" }}>Donec porttitor euismod</b>
                                <p>Nullam a lacinia ipsum, nec dignissim purus. Nulla</p>
                            </div>
                        </div>
                        <div className='assisting-div1'>
                            <FaRegUserCircle style={{ color: 'blue', fontSize: "50px" }} />
                            <div className='assisting-div1-column'>
                                <b style={{ color: "blue" }}>Donec porttitor euismod</b>
                                <p>Nullam a lacinia ipsum, nec dignissim purus. Nulla</p>
                            </div>
                        </div>
                    </div>
                    <div className='assisting-around'>
                        <div className='assisting-around1'>
                            <div className='assisting-around1-div'></div>
                            <div className='assisting-around1-column'>
                                <div className="assisting-around1-div2"></div>
                                <div className="assisting-around1-div3"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='checkout'>
                    <div className='checkout-around'>
                        <div className='checkout-column'>
                            <p style={{ color: "#4361EE" }}>CHECKOUT OUR NEW</p>
                            <b>Latest Listed Properties</b>
                            <p className='checkout-txt'>Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus.</p>
                        </div>
                        <div className='checkout-flex'>
                            <div className='checkout-div1'>All</div>
                            <div className='checkout-div2'>Sell</div>
                            <div className='checkout-div3'>Rent</div>
                        </div>
                    </div>
                    <div className='checkout-diver'>
                        <div className='checkout-div4'>
                            <div className='checkout-img1'>
                                <div className='fire-div'>
                                    <AiFillFire />
                                    Popular</div>
                            </div>
                            <b>$ 5,970</b>
                            <b>Tranquil Haven in the Woods</b>
                            <p>103 Wright CourtBurien, WA 98168</p>
                            <div className='icons-flex-check'>
                                <b>
                                    <FaBed />
                                    4 beds
                                </b>
                                <b>
                                    <FaBath />
                                    3 Bath
                                </b>
                            </div>

                        </div>
                        <div className='checkout-div4'>
                            <div className='checkout-img2'>
                                <div className='house-div'>
                                    <BsFillHouseDoorFill />
                                    New Listing</div>
                            </div>
                            <b>$ 1,970</b>
                            <b>Serene Retreat by the Lake</b>
                            <p>1964 Jehovah Drive, VA 22408</p>
                            <div className='icons-flex-check'>
                                <b>
                                    <FaBed />
                                    3 beds
                                </b>
                                <b>
                                    <FaBath />
                                    2 Bath
                                </b>
                            </div>
                        </div>
                        <div className='checkout-div4'>
                        <div className='checkout-img3'>
                                <div className='dollar-div'>
                                    $
                                    Discounted Price</div>
                            </div>
                            <b>$ 3,450</b>
                            <b>Charming Cottage in the Meadow</b>
                            <p>1508 Centennial Farm RoadHarlan, 51537</p>
                            <div className='icons-flex-check'>
                                <b>
                                    <FaBed />
                                    4 beds
                                </b>
                                <b>
                                    <FaBath />
                                    4 Bath
                                </b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comp5