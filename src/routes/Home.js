import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Home.scss';
import Button from '../components/Button';
import KeyOffering from '../components/KeyOffering';
import { motion } from "framer-motion"
import { toast } from 'sonner'
import {Helmet} from 'react-helmet';

const gridContainerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25
    }
  }
};

const gridElementVariant = {
  hidden: { opacity: 0, x: "-50px" },
  show: {
    opacity: 1,
    x: "0px",
  }
};

const gridProjectElementVariant = {
  hidden: { opacity: 0, y: "-50%" },
  show: {
    opacity: 1,
    y: "0%",
  }
};

const formBoxVariant = {
  hidden: { opacity: 0, y: "50%" },
  show: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 1,
      type: "spring",
      bounce: 0.5
    }
  }
};

function Home() {
  const form = useRef();
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [project, setProject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); // State to store feedback messages
  const [messageType, setMessageType] = useState(''); // State to store the type of message (success or error)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleContentChange = (setter, event) => {
    const content = event.target.textContent.trim();
    console.log(content);
    setter(content);
  };

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log("Form submitted"); // Debugging log

    const formData = {
      from_name: name,
      from_company: company,
      message: project,
      reply_to: email,
    };

    // Use emailjs to send the form data
    emailjs.send('service_kh0k1uo', 'template_vqsts7a', formData, '506kOM8R-RsmpqddF')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setMessage('Your message has been sent successfully!');
          setMessageType('success');
          toast.success('Your message has been sent successfully!');
          // Clear form fields after successful submission
          setName('');
          setCompany('');
          setProject('');
          setEmail('');
        },
        (error) => {
          console.log('FAILED...', error.text);
          setMessage('Failed to send message. Please try again later.');
          setMessageType('error');
          toast.error('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <>
       <Helmet>
        <title>Phinexa </title>
        <meta
          name="description"
          content="Phinexa offers DevOps as a service, software development, cybersecurity, cloud migration, IT automation, and container orchestration to streamline your IT operations."
          data-rh= 'true'
        />
        <link rel="canonical" href="https://www.phinexa.io/contact" />
        
      </Helmet>
    <div className='hero'>
        <motion.div 
        variants={{
          hidden: {x: "-50%"},
          show: {x: "0%", transition: { duration: 0.5, type: "spring", stiffness: 100 }}
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="left">
            <p>Simplifying</p>
            <p>IT Complexity</p>
        </motion.div>
        <motion.div
          variants={{
            hidden: { x: "50%" },
            show: { x: "0%", transition: { duration: 0.5, type: "spring", stiffness: 100 } }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="right"
        >
          <img src={process.env.PUBLIC_URL + '/images/hero-1.svg'} alt="hero" />
        </motion.div>
      </div>

      <section id='offerings'>
        <p className="section-header">What we offer</p>
        <motion.div
          variants={gridContainerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid">
          {offers.map((offer, index) => (
            <motion.div
              variants={gridElementVariant}
              className="offer"
              key={index}>
              <p className="title">{offer.title}</p>
              <p className="description">{offer.description}</p>
            </motion.div>
          ))}
        </motion.div>
        <Button text="View Solutions" onClickRoute="/solutions" />
      </section>

      <section id='animated-offerings'>
        <ul>
          {keyOffers.map((offer, index) => (
            <li key={index}>
              <KeyOffering
                index={index}
                {...offer}
              />
            </li>
          ))}
        </ul>
      </section>

    {/* <section id='projects'>
      <p className="section-header">Our Projects</p>
      <motion.div 
      variants={gridContainerVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid">
        {projects.map((project, index) => (
          <motion.div 
          variants={gridProjectElementVariant}
          className="project"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL + project.imagePath})` }}>
            <p className="title">{project.title}</p>
          </motion.div>
        ))}
      </motion.div>
    </section> */}

      <section id='quotation'>
        <p className="header">Reach out to us</p>
        <p className="header">for Visionary IT Solutions.</p>
        <Button text={"Contact"} rightIcon={<i className="fa fa-arrow-right"></i>} onClickRoute='/contact' />
        <motion.div
          variants={formBoxVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="form-box">
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
            <form ref={form} onSubmit={sendEmail}>
              <p className="greeting">Hey, Phinexa team!</p>
              <div className="body">
                <span>My name is </span>
                <span
                  className='editable-span'
                  contentEditable="true"
                  data-placeholder="Your name"
                  onBlur={(event) => handleContentChange(setName, event)}
                >{name}</span>
                <span> from </span>
                <span
                  contentEditable="true"
                  className='editable-span'
                  data-placeholder="Your website or company"
                  onBlur={(event) => handleContentChange(setCompany, event)}
                >{company}</span>
                <span>. I'd like to </span>
                <span
                  contentEditable="true"
                  className='editable-span'
                  data-placeholder="discuss a software development project"
                  onBlur={(event) => handleContentChange(setProject, event)}
                >{project}</span>
                <span> and you can reach me at </span>
                <span
                  contentEditable="true"
                  className='editable-span'
                  data-placeholder="Your email"
                  onBlur={(event) => handleContentChange(setEmail, event)}
                >{email}</span>
                <span>.</span>
              </div>
              <div className="button-box">
                <Button text={"Submit"} rightIcon={<i className="far fa-paper-plane"></i>} type="submit" />
              </div>
            </form>
          </div>
          {/* {message && (
            <div className={`message ${messageType === 'error' ? 'error' : 'success'}`}>
              {message}
            </div>
          )} */}
        </motion.div>
      </section>
    </>
  );
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
];

const keyOffers = [
  {
    imagePath: "/images/software-development.svg",
    title: "Software Development",
    description: "From strategic IT solutions to language support, we are your one-stop destination for excellence.",
    route: "/solutions"
  },
  {
    imagePath: "/images/cyber-security.svg",
    title: "Cyber Security",
    description: "We provide cutting-edge solutions that empower businesses to thrive in the digital age securely.",
    route: "/solutions"
  },
  {
    imagePath: "/images/devops-as-a-service.svg",
    title: "DevOps as a Service",
    description: "For strategic IT solutions or language support, we're your comprehensive hub for optimizing operations.",
    route: "/solutions"
  }
];

export default Home;
