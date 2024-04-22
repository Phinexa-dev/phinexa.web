import React from 'react';
import './whatwedo.scss';
import WHATWEDOIMG from "../../assets/images/img.png"
function WhatweDo() {
return(
        <div className="section1">
            <div className="sec1-1">
                <h1 className="whatwedo">What We Do</h1>
                <h2 className="atphinexa">at Phinexa</h2>
                <p className="desc">Our team innovates tailored IT solutions, seamlessly integrating  processes, and solving challenges. We are your catalyst for technological advancement, simplifying IT complexities.</p>
            </div>
            <img className="whatwedoimg"  src={WHATWEDOIMG} alt="ss" />
        </div>
)

}

export default WhatweDo