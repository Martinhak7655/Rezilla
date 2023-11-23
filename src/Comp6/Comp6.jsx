import React from 'react'
import "./Comp6.css"
import { ImSearch } from 'react-icons/im';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { FaBed } from 'react-icons/fa';

const Comp6 = () => {
    return (
        <div>
            <div className='services'>
                <h3>OUR SERVICES</h3>
                <h1>Donec porttitor euismod dignissim</h1>
                <div className='services-around'>
                    <div className='services-div'>
                        <div className='services-search-div'>
                            <ImSearch />
                        </div>
                        <b>Buy a New Home</b>
                        <p style={{width: "220px"}}>Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. </p>
                    </div>
                    <div className="services-div">
                    <div className='services-search-div'>
                            <BsFillHouseDoorFill />
                        </div>
                        <b>Sell a House</b>
                        <p style={{width: "220px"}}>Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. </p>
                    </div>
                    <div className="services-div">
                    <div className='services-search-div'>
                            <FaBed />
                        </div>
                        <b>Rent a House</b>
                        <p style={{width: "220px"}}>Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comp6