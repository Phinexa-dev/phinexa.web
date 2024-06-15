import React, {useEffect} from 'react';
import './rubic.css'

function Rubic({ className }) {
    useEffect(() => {
        // window.game = new Game();
        const script = document.createElement('script');
        script.src = './script.js';
        script.async = true;
        document.body.appendChild(script);
    
        return () => {
            document.body.removeChild(script);
        };
    
      }, []);
    
      return (
        // <div className="App">
            <div className={`ui ${className}`}>
                <div className="ui__game">

                </div>
    
                <div className="ui__texts">
                    <h1 className="text text--title">
                    </h1>
                    <div className="text text--note">
                    </div>
                </div>
            
                <div className="ui__prefs">
                    <range name="size" title="Cube Size" list="2,3,4,5"></range>
                    <range name="flip" title="Flip Type" list="Swift&nbsp;,Smooth,Bounce"></range>
                    <range name="scramble" title="Scramble Length" list="20,25,30"></range>
                    <range name="fov" title="Camera Angle" list="Ortographic,Perspective"></range>
                    <range name="theme" title="Color Scheme" list="Cube,Erno,Dust,Camo,Rain"></range>
                </div>
            
                <div className="ui__theme">
                    <range name="hue" title="Hue" color></range>
                    <range name="saturation" title="Saturation" color></range>
                    <range name="lightness" title="Lightness" color></range>
                </div>
            
                <div className="ui__stats">
                    <div className="stats" name="cube-size">
                    </div>
                    <div className="stats" name="total-solves">
                    </div>
                    <div className="stats" name="best-time">
                    </div>
                    <div className="stats" name="worst-time">
                    </div>
                    <div className="stats" name="average-5">
                    </div>
                    <div className="stats" name="average-12">
                    </div>
                    <div className="stats" name="average-25">
                    </div>
                </div>
            
                <div className="ui__buttons hide">
                    <button className="btn btn--bl btn--stats">
                    <icon trophy></icon>
                    </button>
                    <button className="btn btn--br btn--prefs">
                    <icon settings></icon>
                    </button>
                    <button className="btn btn--bl btn--back">
                    <icon back></icon>
                    </button>
                    <button className="btn btn--br btn--theme">
                    <icon theme></icon>
                    </button>
                    <button className="btn btn--br btn--reset">
                    <icon reset></icon>
                    </button>
                </div>
    
            </div>
        // {/* </div> */}
      );
}

export default Rubic