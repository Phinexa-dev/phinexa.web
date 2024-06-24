import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion"
import './Carriers.scss'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { TimelineOppositeContent } from '@mui/lab'
import CircleIcon from '@mui/icons-material/Circle';

const gridContainerVariant = {
    hidden: {opacity: 0},
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25
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

const hiring1 = [
    [
        { title: "Screening", description: "Upload your CV through the form provided. HR screens your CV and you will be shortlisted if you match the requirements" },
        { title: "", description: "" },
        { title: "Interview", description: "Your communication, problem-solving and technical skills will be assessed one-on-one" },
        { title: "", description: "" },
    ],
];

const hiring2 = [
    [
        { title: "", description: "" },
        { title: "Assignment", description: "Shortlisted candidates will receive an assignment to help us understand your expertise" },
        { title: "", description: "" },
        { title: "Join us", description: "You will receive an offer of employment. Accept it, and you officially become a Phinexian." }
    ]
];

function Carreers() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


    const [screenSize, setScreenSize] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setScreenSize(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

  return (
    <>
    <div className='hero carriers'>
        <motion.div 
        variants={{
          hidden: {x: "-50%"},
          show: {x: "0%", transition: { duration: 0.5, type: "spring", stiffness: 100 }}
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="left">
            <p>At the forefront</p>
            <p>of technology, crafting solutions with purpose</p>
        </motion.div>
        <motion.div 
        variants={{
          hidden: {x: "50%"},
          show: {x: "0%", transition: { duration: 0.5, type: "spring", stiffness: 100 }}
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="right"
        >
            <img src={process.env.PUBLIC_URL + '/images/carriers.svg'} alt="hero" />
        </motion.div>
    </div>

    {/* What we offer section */}
    <section className='carriers-section' id='offerings'>
      <p className="section-header">Our Values</p>
      <motion.div 
      variants={gridContainerVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid">
        {offers.map((offer, index) => (
        //   <motion.div
        //   variants={gridElementVariant}
        //   className="offer" 
        //   key={index}>
        //     <p className="title">{offer.title}</p>
        //     <p className="description">{offer.description}</p>
        //   </motion.div>
            index === 6 ? (
                <motion.div variants={gridElementVariant} className="img">
                    <svg width="243" height="145" viewBox="0 0 243 145" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path 
                        animate={["initial"]}
                        whileHover={["grow"]}
                        variants={{
                        grow: {
                            scale: 1.1
                        },
                        rotate: {
                            rotate: [null, -5, 5, 0],
                            transition: {
                            duration: 10
                            }
                        },
                        initial: {
                            y: [-40, 40],
                            x: [40, -40],
                            rotate: 0,
                            transition: {
                            delay: 0.2,
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse"
                            }
                        }
                        }}
                        d="M11.8464 36.8024L80.9586 1.12538L150.071 36.8024V107.971L80.9586 143.648L11.8464 107.971V36.8024Z" stroke="#005F6A" stroke-width="2"/>
                        <motion.path 
                        animate={["initial"]}
                        variants={{
                        rotate: {
                            rotate: [null, -5, 5, 0],
                            transition: {
                            duration: 10
                            }
                        },
                        initial: {
                            y: [-40, 40],
                            x: [-40, 40],
                            rotate: 0,
                            transition: {
                            delay: 1,
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse"
                            }
                        }
                        }}
                        d="M92.8464 36.8024L161.959 1.12538L231.071 36.8024V107.971L161.959 143.648L92.8464 107.971V36.8024Z" stroke="#E6A134" stroke-width="2"/>
                    </svg>
                </motion.div>
            ) : index === 8 ? (
                <motion.div variants={gridElementVariant} className="img">
                    <svg width="225" height="145" viewBox="0 0 225 145" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.circle 
                        animate={["initial"]}
                        whileHover={["grow"]}
                        variants={{
                        grow: {
                            scale: 1.1
                        },
                        rotate: {
                            rotate: [null, -5, 5, 0],
                            transition: {
                            duration: 10
                            }
                        },
                        initial: {
                            y: [-40, 40],
                            x: [40, -40],
                            rotate: 0,
                            transition: {
                            delay: 0.2,
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse"
                            }
                        }
                        }}
                        cx="72.385" cy="72.385" r="71.2005" stroke="#005F6A" stroke-width="2.36906"/>
                        <motion.circle 
                        animate={["initial"]}
                        variants={{
                        rotate: {
                            rotate: [null, -5, 5, 0],
                            transition: {
                            duration: 10
                            }
                        },
                        initial: {
                            y: [-40, 40],
                            x: [-40, 40],
                            rotate: 0,
                            transition: {
                            delay: 1,
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse"
                            }
                        }
                        }}
                        cx="152.608" cy="72.385" r="71.2005" stroke="#E6A134" stroke-width="2.36906"/>
                    </svg>
                </motion.div>
            ) : (
                <motion.div
                variants={gridElementVariant}
                className="offer" 
                key={index}>
                <p className="title">{offer.title}</p>
                <p className="description">{offer.description}</p>
                </motion.div>
            )
        ))}
      </motion.div>
      {/* <Button text="View Solutions" onClickRoute="/solutions"/> */}
    </section>

    <section id='hiring-process'>

    <div className="hiring">
                <p className='sub-title'>Our Hiring Process</p>
                {screenSize > 960 ? (hiring1.map((row, rowIndex) => (
                    <div key={rowIndex} className="content-block-row">
                        {row.map((block, blockIndex) => (
                            <div key={blockIndex} className="block">
                                <p>{block.title}</p>
                                <span>{block.description}</span>
                            </div>
                        ))}
                    </div>
                ))) : null}
                {screenSize > 960 ? (<div className="hiring-image"><img src={process.env.PUBLIC_URL + '/images/Group.png'} alt="" /></div>) : (null)}
                {screenSize > 960 ? (hiring2.map((row, rowIndex) => (
                    <div key={rowIndex} className="content-block-row">
                        {row.map((block, blockIndex) => (
                            <div key={blockIndex} className="block">
                                <p>{block.title}</p>
                                <span>{block.description}</span>
                            </div>
                        ))}
                    </div>
                ))) : <Timeline>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined">
                            <CircleIcon style={{color:'#2A2929'}}/>
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '8px', px: 2 }}>
                            <Typography variant="h5" component="span" color="#005660">
                                Screening
                            </Typography>
                            <Typography>Upload your CV through the form provided. HR screens your CV and you will be shortlisted if you match the requirements
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <Typography variant="h5" component="span" color="#005660">
                                Interview
                            </Typography>
                            <Typography>Your communication, problem-solving and technical skills will be assessed one-on-one
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined">
                            <CircleIcon style={{color:'#2A2929'}}/>
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '8px', px: 2 }}>

                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined">
                            <CircleIcon style={{color:'#2A2929'}}/>
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '8px', px: 2 }}>
                            <Typography variant="h5" component="span" color="#005660">
                                Assignment
                            </Typography>
                            <Typography>Shortlisted candidates will receive an assignment to help us understand your expertise
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <Typography variant="h5" component="span" color="#005660">
                                Join us
                            </Typography>
                            <Typography>You will receive an offer of employment. Accept it, and you officially become a Phinexian.
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined">
                                <CircleIcon style={{color:'#2A2929'}}/>
                            </TimelineDot>
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '8px', px: 2 }}>
                        </TimelineContent>

                    </TimelineItem>
                </Timeline>}
            </div>
            <div className="we-re-hiring">
                <p className='sub-title'>We're Hiring</p>
                <p>
                    Join Phinexa, where innovation meets simplicity! We're hiring passionate individuals to join our dynamic team.
                    Whether you're an experienced professional or a tech-savvy graduate, if you're excited about making a positive
                    impact in IT, explore career opportunities with us. Be part of a culture that values excellence, creativity,
                    and collaboration. Shape the future of technology and be a catalyst for positive change.
                    Check out our open positions and embark on a rewarding career journey with Phinexa!
                </p>
            </div>
    </section>
    </>
  )
}

export default Carreers

const offers = [
    {
      title: "Pioneering Innovation",
      description: "Be at the forefront of technological advancement, continuously pioneering innovative solutions that redefine industry standards."
    },
    {
      title: "Harmony in Simplicity",
      description: "Create harmony by mastering the art of simplicity, offering streamlined and user-friendly solutions that make complexity disappear."
    },
    {
      title: "Intrinsic Client Focus",
      description: "Infuse an intrinsic focus on clients, building deep relationships and delivering tailored solutions that genuinely meet their unique needs."
    },
    {
      title: "Noble Integrity",
      description: "Uphold noble standards of integrity, ensuring transparency, honesty, and ethical conduct in all our interactions and endeavors."
    },
    {
      title: "Ascent to Excellence",
      description: "Embark on an ascent to excellence, setting the bar high in every aspect of our work and consistently delivering top-tier IT solutions."
    },
    {
      title: "Xcelerate Adaptability",
      description: "Xcelerate our adaptability, navigating the ever-evolving IT landscape with agility, turning challenges into opportunities for growth."
    },
    {
        title: '',
        description: '',
    },
    {
      title: "Empowering Collaboration",
      description: "Foster empowering collaboration within our team and with clients, synergizing diverse talents to achieve remarkable results."
    },
    {
        title: '',
        description: '',
    }
  ]