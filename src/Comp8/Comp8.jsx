import React from 'react'
import "./Comp8.css"
import { BsArrowRight } from 'react-icons/bs';

const Comp8 = () => {
    return (
        <div>
            <div className='blog'>
                <h3>What's Trending</h3>
                <h1>Latest Blogs & Posts</h1>
                <div className='blog-around'>
                    <div className="blog-div1">
                        <div className='blog-img1'>
                            <div className='blog-img-div'>
                                <b>28</b>
                                <p>TUE</p>
                            </div>
                        </div>
                        <b style={{ fontSize: "26px" }}>Top 10 Home Buying Mistakes to Avoid</b>
                        <p>Etiam eget elementum elit. Aenean dignissim dapibus vestibulum</p>
                    </div>
                    <div className="blog-div1">
                        <div className='blog-img2'>
                            <div className='blog-img-div'>
                                <b>08</b>
                                <p>MON</p>
                            </div>
                        </div>
                        <b style={{ fontSize: "26px" }}>How to Stage Your Home for a Quick Sale</b>
                        <p>Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc.</p>
                    </div>
                    <div className="blog-div1">
                        <div className='blog-img3'>
                            <div className='blog-img-div'>
                                <b>26</b>
                                <p>Wed</p>
                            </div>
                        </div>
                        <b style={{ fontSize: "26px" }}>5 Tips for First-Time Home Sellers</b>
                        <p>In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus.</p>
                    </div>
                </div>
                <div className='blog-around2'>
                    <div className='blog-icons'>
                        <BsArrowRight />
                    </div>
                    <div className="blog-icons">
                        <BsArrowRight />
                    </div>
                    <div className="blog-icons">
                        <BsArrowRight />
                    </div>
                </div>
                <div className='blog-around3'>
                    <div className='blog1-div'></div>
                    <div className='blog1-div2'></div>
                    <div className='blog1-div2'></div>
                </div>
            </div>
        </div>
    )
}

export default Comp8