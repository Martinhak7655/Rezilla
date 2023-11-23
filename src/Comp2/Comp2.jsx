import React, { useState } from 'react'
import "./Comp2.css"
import { FaHouseCircleCheck } from 'react-icons/fa6';
import { BiUserCircle } from 'react-icons/bi';
import { TiThMenu } from "react-icons/ti";

const Comp2 = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div>
      <div className='header2'>
        <div className='menu'>
          <b className='menu-b'>Home</b>
          <b>About</b>
          <b>Listings</b>
          <b>Services</b>
          <b>Blogs</b>
        </div>
        <div className='header-rezilla'>
          <div className='header-icons'>
            <FaHouseCircleCheck style={{ fontSize: "30px" }} />
          </div>
          <b style={{ fontSize: "20px" }}>Rezilla</b>
        </div>
        <div className='login'>
          <b>
            <BiUserCircle style={{ fontSize: "30px" }} />
            Login/Register
          </b>
          <button className='header2-but'>
            <FaHouseCircleCheck />
            Add Listing
          </button>
        </div>
        <div className='menu-icons' onClick={() => setMenu(!menu)}>
          <TiThMenu />
        </div>
        {menu ? (
          <div className='menu2'>
            <b className='menu-b'>Home</b>
            <b>About</b>
            <b>Listings</b>
            <b>Services</b>
            <b>Blogs</b>
          </div>
        ) : ""}

      </div>
    </div>
  )
}

export default Comp2