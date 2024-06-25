import React from 'react'
import './Cubewrapper.scss'

function CubeWrapper() {
    return (
        <div className="cube-wrapper">
          <iframe
            src="/cube.html"
            className="cube-iframe"
            title="Rubik's Cube"
            frameBorder="0"
          ></iframe>
        </div>
    );
}

export default CubeWrapper