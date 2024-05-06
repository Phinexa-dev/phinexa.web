import React, { useState, useEffect } from 'react';
import './Welcome.scss'
import '../../App.css'
import gallery_1 from './gallery_1.png'
import gallery_2 from './gallery_2.png'
import gallery_3 from './gallery_3.png'
import gallery_4 from './gallery_4.png'
import gallery_5 from './gallery_5.png'
import gallery_6 from './gallery_6.png'
import person1 from './person1.png'
import person2 from './person2.png'
import person3 from './person3.png'
import person4 from './person4.png'
import image from './Contactus.png'
function Welcome() {
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    useEffect(() => {
        window.scrollTo(0, 0);
        const handleResize = () => {
            setScreenSize(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (

        <div className="container-wel">
            <div className="main-wel">
                <div className="left-wel">
                    <span>Hello,</span>
                    <span>welcome to Phinexa.</span>
                    <span>We specialize in transforming IT complexity into elegant simplicity.
                        Our tailored solutions reflect the innovation and precision that define industry leaders.
                        As solution architects, we navigate IT challenges with clarity and efficiency.
                        Embrace a future where complexities are tamed – welcome to a realm where technology becomes
                        effortlessly intuitive.</span>

                </div>
                <div className="right-wel">
                    <img src={image} alt="" />
                </div>

            </div>
            <div className="gallery">
                <div className="images">
                    <div className="row-1">
                        <div className="row-1-left">
                            <img src={gallery_1} alt="" />
                        </div>
                        <div className="row-1-right">
                            <img src={gallery_2} alt="" />
                            <img src={gallery_3} alt="" />
                        </div>
                    </div>
                    {screenSize > 768 ? (<div className="row-2">
                        <div className="row-2-left">
                            <img src={gallery_4} alt="" />
                        </div>
                        <div className="row-2-center">
                            <img src={gallery_5} alt="" />

                        </div>
                        <div className="row-2-right">
                            <img src={gallery_6} alt="" />
                        </div>
                    </div>) : (
                        <div className="row-2">
                            <div className="row-2-top">
                                <div className="row-2-left">
                                    <img src={gallery_4} alt="" />
                                </div>
                                <div className="row-2-right">
                                    <img src={gallery_6} alt="" />
                                </div>
                            </div>
                            <div className="row-2-center">
                                <img src={gallery_5} alt="" />

                            </div>

                        </div>
                    )}
                </div>
                <div className="gallery-info">
                    <p>Simplicity is our sophistication. We ignite possibilities, transform futures, and leverage
                        IT for positive change.
                        The golden ratio guides our commitment to precision, balance, and excellence in every
                        solution we work on.</p>
                </div>
            </div>
            <div className="team">
                <p>Meet Our Team</p>
                <div className="team-gallery">
                    <div className="team-row-1">
                        <img src={person1} alt="" />
                        <img src={person2} alt="" />
                    </div>
                    <div className="team-row-2">
                        <img src={person3} alt="" />
                        <img src={person4} alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Welcome;