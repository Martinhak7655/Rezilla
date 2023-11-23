import React from 'react'
import "./Comp3.css"
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { GiSettingsKnobs } from 'react-icons/gi';
import { CiSearch } from 'react-icons/ci';

const Comp3 = () => {
    const spanStyle = {
        padding: '20px',
        background: '#efefef',
        color: '#000000'
    }

    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '351px',
    }
    const slideImages = [
        {
            url: 'https://5.imimg.com/data5/SELLER/Default/2022/5/HV/ZZ/LI/106321217/luxury-bedroom-interior-design-service.jpg',
            caption: 'Slide 1'
        },
        {
            url: 'https://hips.hearstapps.com/hmg-prod/images/master-bedroom-kelly-behun-rug-kelly-behun-pendant-gracie-studio-panels-1623442703.jpg',
            caption: 'Slide 2'
        },
        {
            url: 'https://www.bocadolobo.com/en/inspiration-and-ideas/wp-content/uploads/2023/09/Indulge-In-Opulence-50-Luxurious-Bedroom-Decor-Ideas-8.jpg',
            caption: 'Slide 3'
        },
    ];
    return (
        <div>
            <div className='home'>
                <div className='home-around'>
                    <div className='home-column'>
                        <b style={{ color: "#4361EE" }}>Real Estate</b>
                        <h1 style={{ width: "300px" }}>Find a perfect home you love..!</h1>
                        <p className='p-width'>Etiam eget elementum elit. Aenean dignissim dapibus vestibulum. Integer a dolor eu sapien sodales vulputate ac in purus.</p>
                        <div className="slide-container">
                            <Slide>
                                {slideImages.map((slideImage, index) => (
                                    <div key={index}>
                                        <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                                        </div>
                                    </div>
                                ))}
                            </Slide>
                        </div>
                    </div>
                    <div className='home-form'>
                        <div className='form-flex'>
                            <b style={{color: "#3A0CA3"}}>For Sale</b>
                            <b>For Rent</b>
                        </div>
                        <hr style={{width: "100%"}} />
                        <input type="text" placeholder='New York, San Francisco, etc' />
                        <input type='text' placeholder='Select Property Type' />
                        <input type='text' placeholder='Select Rooms' />
                        <b style={{color: "#3A0CA3", paddingTop: "40px"}}>
                        <GiSettingsKnobs />

                        Advance Search
                        </b>
                        <button className='form-but'>
                         <CiSearch/>
                         Search
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Comp3
