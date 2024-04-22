import image from './careers.png'
import item1 from './item1.png'
import item2 from './item2.png'
import './Careers.scss'
import group from './Group.png'
import React, { useState, useEffect } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { TimelineOppositeContent } from '@mui/lab'
import CircleIcon from '@mui/icons-material/Circle';

function Careers() {
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
    const values = [
        [
            { title: "Pioneering Innovation", description: "Be at the forefront of technological advancement, continuously pioneering innovative solutions that redefine industry standards." },
            { title: "Harmony in Simplicity", description: "Create harmony by mastering the art of simplicity, offering streamlined and user-friendly solutions that make complexity disappear." },
            { title: "Intrinsic Client Focus", description: "Infuse an intrinsic focus on clients, building deep relationships and delivering tailored solutions that genuinely meet their unique needs." }
        ],
        [
            { title: "Noble Integrity", description: "Uphold noble standards of integrity, ensuring transparency, honesty, and ethical conduct in all our interactions and endeavors." },
            { title: "Ascent to Excellence", description: "Embark on an ascent to excellence, setting the bar high in every aspect of our work and consistently delivering top-tier IT solutions." },
            { title: "Xcelerate Adaptability", description: "Xcelerate our adaptability, navigating the ever-evolving IT landscape with agility, turning challenges into opportunities for growth." }
        ]
    ];
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
    return (
        <div className="container">
            <div className="main">
                <div className="leftt">
                    <p>At the forefront</p>
                    <p>of technology, crafting solutions with purpose</p>


                </div>
                <div className="rightt">
                    <img src={image} alt="" />
                </div>

            </div>
            <div className="values">
                <p className='sub-title'>Our Values</p>
                {values.map((row, rowIndex) => (
                    <div key={rowIndex} className="content-block-row">
                        {row.map((block, blockIndex) => (
                            <div key={blockIndex} className="block">
                                <p>{block.title}</p>
                                <span>{block.description}</span>
                            </div>
                        ))}

                    </div>
                ))}
                <div className="last-row">
                    {screenSize > 768 ? (<div className="block">
                        <img src={item1} alt="" />
                    </div>) : (null)}

                    <div className="block">
                        <p>Empowering Collaboration</p>
                        <span>Foster empowering collaboration within our team and with clients,
                            synergizing diverse talents to achieve remarkable results.</span>
                    </div>
                    {screenSize > 768 ? (<div className="block">
                        <img src={item2} alt="" />
                    </div>) : (null)}
                </div>


            </div>
            <div className="hiring">
                <p className='sub-title'>Our Hiring Process</p>
                {screenSize > 768 ? (hiring1.map((row, rowIndex) => (
                    <div key={rowIndex} className="content-block-row">
                        {row.map((block, blockIndex) => (
                            <div key={blockIndex} className="block">
                                <p>{block.title}</p>
                                <span>{block.description}</span>
                            </div>
                        ))}
                    </div>
                ))) : null}
                {screenSize > 768 ? (<div className="hiring-image"><img src={group} alt="" /></div>) : (null)}
                {screenSize > 768 ? (hiring2.map((row, rowIndex) => (
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

        </div>
    )
}

export default Careers;