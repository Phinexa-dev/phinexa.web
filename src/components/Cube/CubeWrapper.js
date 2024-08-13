import React, { useState, useEffect } from 'react'
import './Cubewrapper.scss'
import './Gestures.scss'

function CubeWrapper() {

    const [instructionStep, setInstructionStep] = useState(0);

    const handleDoubleTap = () => {
        if (instructionStep === 1) {
            setInstructionStep(2);
        }
    };

    useEffect(() => {
        const hasVisited = localStorage.getItem("hasVisited");
        const canvas = document.getElementById('rubiks-cube');
        let lastTap = 0;

        setTimeout(() => {
          if ((instructionStep) === 0 && !hasVisited) {
            setInstructionStep(1);
            localStorage.setItem("hasVisited", "true");
          }
        }, 2500);

        const onCanvasClick = () => {
            const currentTime = new Date().getTime();
            const tapLength = currentTime - lastTap;

            if (tapLength < 500 && tapLength > 0) {
                handleDoubleTap();
            }

            console.log('hello');

            lastTap = currentTime;
        };

        canvas.addEventListener('click', onCanvasClick);

        return () => {
            canvas.removeEventListener('click', onCanvasClick);
        };
        // eslint-disable-next-line
    }, []);

    return (
        <div className="cube-wrapper">
          <iframe
            src="/cube.html"
            className="cube-iframe"
            title="Rubik's Cube"
            frameBorder="0"
            id="rubiks-cube"
          ></iframe>
            {instructionStep === 1 && (
                <div className="instructions">
                    <div className="inner-border">
                      <p>Double tap on the cube to shuffle.</p>
                      <div className="svgs">
                        <svg className='gesture' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                          <circle class="tap-2" cx="89.43" cy="69.55" r="29.61"/>
                          <circle class="tap-1" cx="89.43" cy="69.55" r="19.46"/>
                          <path class="hand-double" d="M139.93,107.76l-41.12-6.93V70.28A9.25,9.25,0,0,0,89.56,61h0a9.25,9.25,0,0,0-9.25,9.25v57.36L71,116.85c-3.61-3.61-8.44-3.89-13.08,0,0,0-7.24,5.84-3.83,9.25l34,34h42.63a9.25,9.25,0,0,0,9.07-7.43l6.82-34.09A9.28,9.28,0,0,0,139.93,107.76Z"/>
                        </svg>
                      </div>
                      <div className='instruction-btn' onClick={()=> setInstructionStep(2)}>Next</div>
                    </div>
                </div>
            )}
            {instructionStep === 2 && (
              <div className="instructions">
                    <div className="inner-border">
                      <p>Use mouse up, down, left, right to move rows and columns.</p>
                      <div className="svgs">
                        <svg className='gesture' id="Swipe-horizontal_1" data-name="Swipe horizontal 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                          <path class="hand-x" d="M139.93,113.56l-41.12-6.93V76.08a9.25,9.25,0,0,0-9.25-9.25h0a9.25,9.25,0,0,0-9.25,9.25v57.36L71,122.65c-3.61-3.61-8.44-3.89-13.08,0,0,0-7.24,5.84-3.83,9.25l34,34h42.63a9.25,9.25,0,0,0,9.07-7.43l6.82-34.09A9.28,9.28,0,0,0,139.93,113.56Z"/>
                          <g class="swipe-horizontal">
                            <path class="line-horizontal" d="M70.85,42c19.69-12.46,37,0,37,0"/>
                            <polyline class="arrow-left" points="76.6 46.01 68.37 43.43 68.38 43.41 70.96 35.18"/>
                            <polyline class="arrow-right" points="100.21 44.66 108.43 42.08 108.43 42.06 105.85 33.84"/>
                          </g>
                        </svg>
                        <svg className='gesture' id="Swipe-vertical_1" data-name="Swipe vertical 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                          <path class="hand-y" d="M131.09,69.21l-34,24.17-21.6-21.6a9.25,9.25,0,0,0-13.08,0h0a9.25,9.25,0,0,0,0,13.08L103,125.43l-14.18-1.08c-5.11,0-8.72,3.22-9.25,9.25,0,0-1,9.25,3.83,9.25h48l30.14-30.14A9.25,9.25,0,0,0,162.72,101L143.43,72.11A9.28,9.28,0,0,0,131.09,69.21Z"/>
                          <g class="swipe-vertical">
                            <path class="line-vertical" d="M43.94,94.27c-12.46-19.69,0-37,0-37"/>
                            <polyline class="arrow-down" points="47.93 88.53 45.35 96.75 45.33 96.75 37.11 94.17"/>
                            <polyline class="arrow-up" points="46.59 64.92 44.01 56.69 43.98 56.7 35.76 59.28"/>
                          </g>
                        </svg>
                      </div>
                      <div className='instruction-btn' onClick={()=> setInstructionStep(0)}>Got It</div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CubeWrapper