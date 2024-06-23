import React, {useEffect} from 'react'
import { motion } from "framer-motion"
import './About.scss'

function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
    <div className='hero about'>
        <motion.div 
        variants={{
          hidden: {x: "-50%"},
          show: {x: "0%", transition: { duration: 0.5, type: "spring", stiffness: 100 }}
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="left">
            <p>Hello,</p>
            <p>Welcome to Phinexa</p>
            <p className="description">We specialize in transforming IT complexity into elegant simplicity. Our tailored solutions reflect the innovation and precision that define industry leaders. As solution architects, we navigate IT challenges with clarity and efficiency. Embrace a future where complexities are tamed – welcome to a realm where technology becomes effortlessly intuitive.</p>
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
            <img src={process.env.PUBLIC_URL + '/images/about.svg'} alt="hero" />
        </motion.div>
    </div>

    <section id='gallery-section'>
      <div className="gallery">
        <div className="row-1">
          <img src={process.env.PUBLIC_URL + '/images/gallery/gallery_1.png'} alt="" />
          <img src={process.env.PUBLIC_URL + '/images/gallery/gallery_2.png'} alt="" />
          <img src={process.env.PUBLIC_URL + '/images/gallery/gallery_3.png'} alt="" />
        </div>
        <div className="row">
            <img src={process.env.PUBLIC_URL + '/images/gallery/gallery_2.png'} alt="" />
            <img src={process.env.PUBLIC_URL + '/images/gallery/gallery_3.png'} alt="" />
        </div>
        <div className="row">
            <img src={process.env.PUBLIC_URL + '/images/gallery/gallery_4.png'} alt="" />
            <img src={process.env.PUBLIC_URL + '/images/gallery/gallery_6.png'} alt="" />
        </div>
        <div className="row-2">
          <img src={process.env.PUBLIC_URL + '/images/gallery/gallery_4.png'} alt="" />
          <img src={process.env.PUBLIC_URL + '/images/gallery/gallery_5.png'} alt="" />
          <img src={process.env.PUBLIC_URL + '/images/gallery/gallery_6.png'} alt="" />
        </div>
      </div>
      <p>Simplicity is our sophistication. We ignite possibilities, transform futures, and leverage IT for positive change. The golden ratio guides our commitment to precision, balance, and excellence in every solution we work on.</p>
    </section>

    <section id='team-section'>
      <p className="header">Meet Our Team</p>

      <div className="members">
        {team.map((member, index) => (
          <div className="member">
          <div className="avatar">
            <img className='background' src={process.env.PUBLIC_URL + '/images/background-team-' + (index % 2 === 0 ? 'even' : 'odd') + '.svg'} alt="" />
            <img className='foreground' src={process.env.PUBLIC_URL + '/images/' + member.image} alt="" />
          </div>
          <p className="name">{member.name}</p>
          <p className="title">{member.title}</p>
        </div>
        ))}
      </div>
    </section>
    </>
  )
}

export default About

const team = [
  {
    image: 'foreground-1.png',
    name: 'John Anderson',
    title: 'CEO & Founder'
  },
  {
    image: 'foreground-1.png',
    name: 'George Frances',
    title: 'Member'
  },
  {
    image: 'foreground-1.png',
    name: 'George Frances',
    title: 'Member'
  },
  {
    image: 'foreground-1.png',
    name: 'George Frances',
    title: 'Member'
  },
  {
    image: 'foreground-1.png',
    name: 'George Frances',
    title: 'Member'
  },
  {
    image: 'foreground-1.png',
    name: 'George Frances',
    title: 'Member'
  }
]