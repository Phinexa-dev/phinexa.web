import React from 'react'
import './Home.scss';

function Home() {
  return (
    <>
    <div className='hero'>
        <div className="left">
            <p>Simplifying</p>
            <p>IT Complexity</p>
        </div>
        <div className="right">
            <img src={process.env.PUBLIC_URL + '/images/placeholder-image.png'} alt="hero" />
        </div>
    </div>

    {/* What we offer section */}
    <section>
      <p className="section-header">What we offer</p>
      <div className="grid">
        {offers.map((offer, index) => (
          <div className="offer" key={index}>
            <p className="title">{offer.title}</p>
            <p className="description">{offer.description}</p>
          </div>
        ))}
      </div>
      <button>View Solutions</button>
    </section>

    <section>

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

export default Home