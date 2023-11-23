import React from 'react'
import "./Comp1.css"
import { BiSolidMap } from 'react-icons/bi';
import { AiFillPhone } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

const Comp1 = () => {
    return (
        <div>
            <div className='header1'>
                <b>
                    <BiSolidMap />
                    Rezilla, 18 Grattan St, Broklyn
                </b>
                <div className='header1-flex'>
                    <b>
                        <AiFillPhone />
                        +1 206-214-2298
                    </b>
                    <b>
                        <MdEmail />
                        support@rezilla.com
                    </b>
                </div>
            </div>
        </div>
    )
}

export default Comp1