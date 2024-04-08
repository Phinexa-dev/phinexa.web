import React, {useState} from 'react'
import './Home.scss';
import Button from '../components/Button';
import KeyOffering from '../components/KeyOffering';
import { motion } from "framer-motion"

const gridContainerVariant = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const gridElementVariant = {
  hidden: {opacity: 0, x: "-50px"},
  show: {opacity: 1, x: "0px"}
}

function Home() {

  const [name, setName] = useState('Your name');
  const [company, setCompany] = useState('Your website or company');
  const [project, setProject] = useState('discuss a software development project');
  const [email, setEmail] = useState('Your email');

  const handleContentChange = (setter, defaultValue, event) => {
    const content = event.target.textContent.trim();
    setter(content === '' ? defaultValue : content);
  };

  return (
    <>
    <div className='hero'>
        <motion.div 
        variants={{
          hidden: {x: "-50%"},
          show: {x: "0%", transition: { duration: 0.5, type: "spring", stiffness: 100 }}
        }}
        initial="hidden"
        whileInView="show"
        className="left">
            <p>Simplifying</p>
            <p>IT Complexity</p>
        </motion.div>
        <motion.div 
        variants={{
          hidden: {x: "50%"},
          show: {x: "0%", transition: { duration: 0.5, type: "spring", stiffness: 100 }}
        }}
        initial="hidden"
        whileInView="show"
        className="right">
            <img src={process.env.PUBLIC_URL + '/images/placeholder-image.png'} alt="hero" />
        </motion.div>
    </div>

    {/* What we offer section */}
    <section id='offerings'>
      <p className="section-header">What we offer</p>
      <motion.div 
      variants={gridContainerVariant}
      initial="hidden"
      whileInView="show"
      // animate="show"
      className="grid">
        {offers.map((offer, index) => (
          <motion.div variants={gridElementVariant} className="offer" key={index}>
            <p className="title">{offer.title}</p>
            <p className="description">{offer.description}</p>
          </motion.div>
        ))}
      </motion.div>
      <Button text="View Solutions" onClickRoute="/solutions"/>
    </section>

    <section id='animated-offerings'>
        <ul>
          {keyOffers.map((offer, index) => (
            <li>
              <KeyOffering
              index={index}
              {...offer}
              />
            </li>
          ))}
        </ul>
    </section>

    <section id='projects'>
      <p className="section-header">Our Projects</p>
      <div className="grid">
        {projects.map((project, index) => (
          <div className="project"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL + project.imagePath})` }}>
            <p className="title">{project.title}</p>
          </div>
        ))}
      </div>
    </section>

    <section id='quotation'>
      <p className="header">Reach out to us</p>
      <p className="header">for Visionary IT Solutions.</p>
      <Button text={"Contact"} rightIcon={<i class="fa fa-arrow-right"></i>
}/>
      <div className="form-box">
        <div className="top">
          <p className="title">Request a Quote</p>
          <p className="description">Leave your details below and we will be in touch.</p>
        </div>
        <div className="hr-line"></div>
        <div className="bottom">
          <div className="note">
            <p>To receive priority access to our client engagement team, simply provide your details.</p>
            <p>We look forward to being in touch with you.</p>
          </div>
          <form action="">
            <p className="greeting">Hey, Phinexa team!</p>
            <div className="body">
              <span>My name is </span>
              <span 
              className='editable-span' 
              contenteditable="true"
              onBlur={(event) => handleContentChange(setName, 'Your name', event)}
              >{name}</span>
              <span> from </span>
              <span 
              contenteditable="true" 
              className='editable-span'
              onBlur={(event) => handleContentChange(setCompany, 'Your website or company', event)}
              >{company}</span>
              <span>. I'd like to </span>
              <span 
              contenteditable="true" 
              className='editable-span'
              onBlur={(event) => handleContentChange(setProject, 'discuss a software development project', event)}
              >{project}</span>
              <span> and you can reach me at </span>
              <span 
              contenteditable="true" 
              className='editable-span'
              onBlur={(event) => handleContentChange(setEmail, 'Your email', event)}
              >{email}</span>
              <span>.</span>
              </div>
          </form>
        </div>
        <div className="button-box">
          <Button text={"Submit"} rightIcon={<i class="far fa-paper-plane"></i>
}/>
        </div>
      </div>
    </section>
    </>
  )
}

const offers = [
  {
    title: "DevOps as a service (DaaS)",
    description: "Streamline collaboration, automate workflows, and accelerate software delivery. Achieve faster time-to-market, improved quality, and operational efficiency through CI/CD and IaC"
  },
  {
    title: "Software Development",
    description: "Holistic SDLC approach, agile methodologies, diverse technologies. Build scalable, high-performance solutions for unique challenges, ensuring businesses stay ahead in the digital landscape."
  },
  {
    title: "Cyber Security and Compliance",
    description: "Prioritize system and data security. Implement robust cybersecurity measures, proactive threat detection, and compliance with industry standards. Build trust and confidence by safeguarding against internal and external threats."
  },
  {
    title: "Cloud Migration and Management",
    description: "Enable enhanced scalability, cost-effectiveness, and resilience through cloud technology. Structured methodology for seamless migrations, minimizing downtime and mitigating risks. Leverage cloud architecture, deployment models, and services for business objectives."
  },
  {
    title: "IT Automation",
    description: "Streamline tasks, enhance operational efficiency, reduce human error. Leverage automation tools for infrastructure provisioning, configuration management, software deployment, and monitoring. Drive consistency, scalability, and cost savings."
  },
  {
    title: "Container Orchestration",
    description: "Specialize in managing and automating containerized applications.  Standardize deployment processes for greater efficiency, agility, and reliability in software delivery. Embrace modern application architectures and drive innovation at scale."
  }
]

const keyOffers = [
  {
    imagePath: "/images/software-development.svg",
    title: "Software Development",
    description: "From strategic IT solutions to language support, we are your one-stop destination for excellence.",
    route: "/solutions/software-development"
  },
  {
    imagePath: "/images/cyber-security.svg",
    title: "Cyber Security",
    description: "We provide cutting-edge solutions that empower businesses to thrive in the digital age securely.",
    route: "/solutions/software-development"
  },
  {
    imagePath: "/images/devops-as-a-service.svg",
    title: "DevOps as a Service",
    description: "For strategic IT solutions or language support, we're your comprehensive hub for optimizing operations.",
    route: "/solutions/software-development"
  }
]

const projects = [
  {
    imagePath: '/images/placeholder-image.png',
    title: 'Cyber Security'
  },
  {
    imagePath: '/images/placeholder-image.png',
    title: 'Cyber Security'
  },
  {
    imagePath: '/images/placeholder-image.png',
    title: 'Cyber Security'
  },
  {
    imagePath: '/images/placeholder-image.png',
    title: 'Cyber Security'
  }
]

export default Home