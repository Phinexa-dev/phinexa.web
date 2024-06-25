import React, { useEffect, useState } from 'react'
import './WhatWeDo.scss';
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { motion } from "framer-motion"
import {Helmet} from 'react-helmet'

const gridContainerVariant = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const gridElementVariant = {
  hidden: {opacity: 0, x: "-50px"},
  show: {
    opacity: 1, 
    x: "0px",
  }
}

function WhatWeDo() {

  const [activeIndex, setActiveIndex] = useState(0);

  const categories = [
    "DevOPs as a Service (DaaS)",
    "Blockchain and Cryptocurrency",
    "Data Analysis",
    "Cyber Security",
    "IoT",
    "Web and Mobile"
  ];

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
    <Helmet>
        <title>What We Do - Phinexa</title>
        <meta
          name="description"
          content="Discover how Phinexa innovates with tailored IT solutions, simplifying complexities through DevOps, blockchain, cybersecurity, data analysis, IoT, and more."
        />
        <link rel="canonical" href="https://www.phinexa.com/what-we-do" />
      </Helmet>
      <div className='hero whatwedohero'>
        <motion.div 
          variants={{
            hidden: {x: "-50%"},
            show: {x: "0%", transition: { duration: 0.5, type: "spring", stiffness: 100 }}
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="left">
            <p>What We Do</p>
            <p>at Phinexa</p>
            <p className="description">Our team innovates tailored IT solutions, seamlessly integrating processes, and solving challenges. We are your catalyst for technological advancement, simplifying IT complexities.</p>
        </motion.div>
        <motion.div 
          variants={{
            hidden: {x: "50%"},
            show: {x: "0%", transition: { duration: 0.5, type: "spring", stiffness: 100 }}
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="right">
            <img src={process.env.PUBLIC_URL + '/images/what-we-do.svg'} alt="hero" />
        </motion.div>
      </div>

      <section id='whatwedo-section-title'>
        <p>Future proof with leading edge technologies</p>
      </section>

      <section id='whatwedo-section'>
        <div className="left">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`tech-category ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <p>{category}</p>
              <FaAngleRight className='icon' />
            </div>
          ))}
        </div>
        <div className="right">
          <motion.div 
            key={activeIndex} // Trigger re-render and animation
            variants={gridContainerVariant}
            initial="hidden"
            animate="show"
            className="grid">
            {images[activeIndex].map((icon, idx) => (
              <motion.img 
                key={idx}
                variants={gridElementVariant}
                src={process.env.PUBLIC_URL + '/images/' + icon} 
                alt="" 
                className="tech-icon" 
              />
            ))}
          </motion.div>
        </div>
      </section>

      <section id='whatwedo-section-mobile'>
        <p className="section-header">Future proof with leading edge technologies</p>
        {categories.map((category, index) => (
          <div key={index} className="container">
            <div
              className={`tech-category ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <p>{category}</p>
              <FaAngleDown className='icon' />
            </div>

            {index === activeIndex && (
              <motion.div 
                key={activeIndex} // Trigger re-render and animation
                variants={gridContainerVariant}
                initial="hidden"
                animate="show"
                className="grid">
                {images[activeIndex].map((icon, idx) => (
                  <motion.img 
                    key={idx}
                    variants={gridElementVariant}
                    src={process.env.PUBLIC_URL + '/images/' + icon} 
                    alt="" 
                    className="tech-icon" 
                  />
                ))}
              </motion.div>
            )}
          </div>
        ))}
      </section>
    </>
  )
}

export default WhatWeDo
const images = [
  [
    'devops-tech-icons/d1.png',
    'devops-tech-icons/d2.png',
    'devops-tech-icons/d3.png',
    'devops-tech-icons/d4.png',
    'devops-tech-icons/d5.png',
    'devops-tech-icons/d6.png',
    'devops-tech-icons/d7.png',
    'devops-tech-icons/d8.png',
    'devops-tech-icons/d9.png',
    'devops-tech-icons/d10.png',
    'devops-tech-icons/d11.png',
    'devops-tech-icons/d12.png',
    'devops-tech-icons/d13.png',
    'devops-tech-icons/d14.png',
    'devops-tech-icons/d15.png'
  ],
  [
    'blockchain-icons/BC1.png',
    'blockchain-icons/BC2.png',
    'blockchain-icons/BC3.png',
    'blockchain-icons/BC4.png',
    // 'blockchain-icons/BC5.png',
    'blockchain-icons/BC6.png',
    'blockchain-icons/BC7.png',
    'blockchain-icons/BC8.png',
    'blockchain-icons/BC9.png',
    'blockchain-icons/BC10.png',
    'blockchain-icons/BC11.png',
    'blockchain-icons/BC12.png',
    'blockchain-icons/BC13.png',
  ],
  [
    'data-analysis-icons/DA1.png',
    'data-analysis-icons/DA2.png',
    'data-analysis-icons/DA3.png',
    'data-analysis-icons/DA4.png',
    'data-analysis-icons/DA5.png',
    'data-analysis-icons/DA6.png',
    'data-analysis-icons/DA7.png',
    'data-analysis-icons/DA8.png',
    'data-analysis-icons/DA9.png',
    'data-analysis-icons/DA10.png',
  ],
  [
    'cyber-security-icons/CS1.png',
    'cyber-security-icons/CS2.png',
    'cyber-security-icons/CS3.png',
    'cyber-security-icons/CS4.png',
    'cyber-security-icons/CS5.png',
    'cyber-security-icons/CS6.png',
    'cyber-security-icons/CS7.png',
    'cyber-security-icons/CS8.png',
    'cyber-security-icons/CS9.png',
    'cyber-security-icons/CS10.png',
  ],
  [
    'iot-icons/IoT1.png',
    'iot-icons/IoT2.png',
    // 'iot-icons/IoT3.png',
    'iot-icons/IoT4.png',
    'iot-icons/IoT5.png',
    'iot-icons/IoT6.png',
    'iot-icons/IoT7.png',
    'iot-icons/IoT8.png',
    'iot-icons/IoT9.png',
  ],
  [
    'web-icons/WEB1.png',
    // 'web-icons/WEB2.png',
    'web-icons/WEB3.png',
    'web-icons/WEB4.png',
    'web-icons/WEB5.png',
    'web-icons/WEB6.png',
    'web-icons/WEB7.png',
    'web-icons/WEB8.png',
    'web-icons/WEB9.png',
    'web-icons/WEB10.png',
    'web-icons/WEB11.png',
    'web-icons/WEB12.png',
    'web-icons/WEB13.png',
    'web-icons/WEB14.png',
  ]
]