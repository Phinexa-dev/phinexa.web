import React,{ useState }  from 'react';
import './leadingtech.scss';
import D1 from "../../assets/images/devops-tech-icons/d1.svg.png"
import D2 from "../../assets/images/devops-tech-icons/d2.png";
import D3 from "../../assets/images/devops-tech-icons/d3.svg";
import D4 from "../../assets/images/devops-tech-icons/d4.png";
import D5 from "../../assets/images/devops-tech-icons/d5.png";
import D6 from "../../assets/images/devops-tech-icons/d6.png";
import D7 from "../../assets/images/devops-tech-icons/d7.png";
import D8 from "../../assets/images/devops-tech-icons/d8.jpg";
import D9 from "../../assets/images/devops-tech-icons/d9.png";
import D10 from "../../assets/images/devops-tech-icons/d10.png";
import D11 from "../../assets/images/devops-tech-icons/d11.svg.png";
import D12 from "../../assets/images/devops-tech-icons/d12.png";
import D13 from "../../assets/images/devops-tech-icons/d13.svg.png";
import D14 from "../../assets/images/devops-tech-icons/d14.png";
import D15 from "../../assets/images/devops-tech-icons/d15.png";
import BC1 from "../../assets/images/Blockchain-icons/BC1.png";
import BC2 from "../../assets/images/Blockchain-icons/BC2.png";
import BC3 from "../../assets/images/Blockchain-icons/BC3.jpeg";
import BC4 from "../../assets/images/Blockchain-icons/BC4.png";
import BC5 from "../../assets/images/Blockchain-icons/BC5.png";
import BC6 from "../../assets/images/Blockchain-icons/BC6.png";
import BC7 from "../../assets/images/Blockchain-icons/BC7.jpg";
import BC8 from "../../assets/images/Blockchain-icons/BC8.png";
import BC9 from "../../assets/images/Blockchain-icons/BC9.jpg";
import BC10 from "../../assets/images/Blockchain-icons/BC10.png";
import BC11 from "../../assets/images/Blockchain-icons/BC11.png";
import BC12 from "../../assets/images/Blockchain-icons/BC12.jpg";
import BC13 from "../../assets/images/Blockchain-icons/BC13.png";

import DA1 from "../../assets/images/data-analysis-icons/DA1.png";
import DA2 from "../../assets/images/data-analysis-icons/DA2.png";
import DA3 from "../../assets/images/data-analysis-icons/DA3.png";
import DA4 from "../../assets/images/data-analysis-icons/DA4.png";
import DA5 from "../../assets/images/data-analysis-icons/DA5.png";
import DA6 from "../../assets/images/data-analysis-icons/DA6.png";
import DA7 from "../../assets/images/data-analysis-icons/DA7.png";
import DA8 from "../../assets/images/data-analysis-icons/DA8.jpg";
import DA9 from "../../assets/images/data-analysis-icons/DA9.png";
import DA10 from "../../assets/images/data-analysis-icons/DA10.png";

import CS1 from "../../assets/images/cyber-security-icons/CS1.png";
import CS2 from "../../assets/images/cyber-security-icons/CS2.png";
import CS3 from "../../assets/images/cyber-security-icons/CS3.png";
import CS4 from "../../assets/images/cyber-security-icons/CS4.png";
import CS5 from "../../assets/images/cyber-security-icons/CS5.png";
import CS6 from "../../assets/images/cyber-security-icons/CS6.jpg";
import CS7 from "../../assets/images/cyber-security-icons/CS7.png";
import CS8 from "../../assets/images/cyber-security-icons/CS8.png";
import CS9 from "../../assets/images/cyber-security-icons/CS9.png";
import CS10 from "../../assets/images/cyber-security-icons/CS10.png";

import IoT1 from "../../assets/images/iot-icons/IoT1.jpg";
import IoT2 from "../../assets/images/iot-icons/IoT2.png";
import IoT3 from "../../assets/images/iot-icons/IoT3.png";
import IoT4 from "../../assets/images/iot-icons/IoT4.jpg";
import IoT5 from "../../assets/images/iot-icons/IoT5.png";
import IoT6 from "../../assets/images/iot-icons/IoT6.png";
import IoT7 from "../../assets/images/iot-icons/IoT7.png";
import IoT8 from "../../assets/images/iot-icons/IoT8.png";
import IoT9 from "../../assets/images/iot-icons/IoT9.png";

import WEB1 from "../../assets/images/web-icons/WEB1.png";
import WEB2 from "../../assets/images/web-icons/WEB2.png";
import WEB3 from "../../assets/images/web-icons/WEB3.png";
import WEB4 from "../../assets/images/web-icons/WEB4.png";
import WEB5 from "../../assets/images/web-icons/WEB5.jpg";
import WEB6 from "../../assets/images/web-icons/WEB6.png";
import WEB7 from "../../assets/images/web-icons/WEB7.png";
import WEB8 from "../../assets/images/web-icons/WEB8.png";
import WEB9 from "../../assets/images/web-icons/WEB9.png";
import WEB10 from "../../assets/images/web-icons/WEB10.png";
import WEB11 from "../../assets/images/web-icons/WEB11.jpg";
import WEB12 from "../../assets/images/web-icons/WEB12.png";
import WEB13 from "../../assets/images/web-icons/WEB13.png";
import WEB14 from "../../assets/images/web-icons/WEB14.jpg";


import googleCloudImg from "./mnm.png"
import otherTechImg from "./mnm.png"
function LeadingTech() {
  const [selectedCategory, setSelectedCategory] = useState('DevOps');

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };
 const categoryIcons = {
    'DevOps': [
      { img: D1, alt: 'AWS' },
  { img: D2, alt: 'Docker' },
  { img: D3, alt: 'Google Cloud' },
  { img: D4, alt: 'Azure' },
  { img: D5, alt: 'Kubernetes' },
  { img: D6, alt: 'CI/CD' },
  { img: D7, alt: 'Git' },
  { img: D8, alt: 'Jenkins' },
  { img: D9, alt: 'Terraform' },
  { img: D10, alt: 'Ansible' },
  { img: D11, alt: 'VMware' },
  { img: D12, alt: 'Docker Swarm' },
  { img: D13, alt: 'Red Hat' },
  { img: D14, alt: 'Chef' },
  { img: D15, alt: 'Puppet' },
    ],
    'Software Development': [
      { img: otherTechImg, alt: 'Other Tech' },
      // Add more Software Development related icons
    ],
    'Blockchain and Cryptocurrency': [
  { img: BC1, alt: 'BC1' },
  { img: BC2, alt: 'BC2' },
  { img: BC3, alt: 'BC3' },
  { img: BC4, alt: 'BC4' },
  { img: BC5, alt: 'BC5' },
  { img: BC6, alt: 'BC6' },
  { img: BC7, alt: 'BC7' },
  { img: BC8, alt: 'BC8' },
  { img: BC9, alt: 'BC9' },
  { img: BC10, alt: 'BC10' },
  { img: BC11, alt: 'BC11' },
  { img: BC12, alt: 'BC12' },
  { img: BC13, alt: 'BC13' }
],
     'Data Analysis': [
  { img: DA1, alt: 'DA1' },
  { img: DA2, alt: 'DA2' },
  { img: DA3, alt: 'DA3' },
  { img: DA4, alt: 'DA4' },
  { img: DA5, alt: 'DA5' },
  { img: DA6, alt: 'DA6' },
  { img: DA7, alt: 'DA7' },
  { img: DA8, alt: 'DA8' },
  { img: DA9, alt: 'DA9' },
  { img: DA10, alt: 'DA10' }
],
     'Cyber Security': [
  { img: CS1, alt: 'CS1' },
  { img: CS2, alt: 'CS2' },
  { img: CS3, alt: 'CS3' },
  { img: CS4, alt: 'CS4' },
  { img: CS5, alt: 'CS5' },
  { img: CS6, alt: 'CS6' },
  { img: CS7, alt: 'CS7' },
  { img: CS8, alt: 'CS8' },
  { img: CS9, alt: 'CS9' },
  { img: CS10, alt: 'CS10' }
],
     'IoT': [
  { img: IoT1, alt: 'IoT1' },
  { img: IoT2, alt: 'IoT2' },
  { img: IoT3, alt: 'IoT3' },
  { img: IoT4, alt: 'IoT4' },
  { img: IoT5, alt: 'IoT5' },
  { img: IoT6, alt: 'IoT6' },
  { img: IoT7, alt: 'IoT7' },
  { img: IoT8, alt: 'IoT8' },
  { img: IoT9, alt: 'IoT9' }
],
     'Web and Mobile' :[
  { img: WEB1, alt: 'WEB1' },
  { img: WEB2, alt: 'WEB2' },
  { img: WEB3, alt: 'WEB3' },
  { img: WEB4, alt: 'WEB4' },
  { img: WEB5, alt: 'WEB5' },
  { img: WEB6, alt: 'WEB6' },
  { img: WEB7, alt: 'WEB7' },
  { img: WEB8, alt: 'WEB8' },
  { img: WEB9, alt: 'WEB9' },
  { img: WEB10, alt: 'WEB10' },
  { img: WEB11, alt: 'WEB11' },
  { img: WEB12, alt: 'WEB12' },
  { img: WEB13, alt: 'WEB13' },
  { img: WEB14, alt: 'WEB14' }
]





    // Add other categories as needed
  };

return(
       <div className="section11">
                 <ul className="service-list">
        <li className="service-item">
          <a href="#" onClick={() => handleSelectCategory('DevOps')}>
            DevOps as a Service (DaaS)
            <span className={selectedCategory === 'DevOps' ? "chevron left" : "chevron right"}></span>
          </a>
        </li>
        <li className="service-item">
          <a href="#" onClick={() => handleSelectCategory('Blockchain and Cryptocurrency')}>
            Blockchain and Cryptocurrency
            <span className={selectedCategory === 'Blockchain and Cryptocurrency' ? "chevron left" : "chevron right"}></span>
          </a>
        </li>
        <li className="service-item">
          <a href="#" onClick={() => handleSelectCategory('Data Analysis')}>
            Data Analysis
            <span className={selectedCategory === 'Data Analysis' ? "chevron left" : "chevron right"}></span>
          </a>
        </li>
        <li className="service-item">
          <a href="#" onClick={() => handleSelectCategory('Cyber Security')}>
            Cyber Security
            <span className={selectedCategory === 'Cyber Security' ? "chevron left" : "chevron right"}></span>
          </a>
        </li>
        <li className="service-item">
          <a href="#" onClick={() => handleSelectCategory('IoT')}>
            IoT
            <span className={selectedCategory === 'IoT' ? "chevron left" : "chevron right"}></span>
          </a>
        </li>
        <li className="service-item">
          <a href="#" onClick={() => handleSelectCategory('Web and Mobile')}>
            Web and Mobile
            <span className={selectedCategory === 'Web and Mobile' ? "chevron left" : "chevron right"}></span>
          </a>
        </li>
      </ul>
            <div className="tech-iconss">

                <h2>Our {selectedCategory} Technologies</h2>

                <div className="tech-icons">
       {categoryIcons[selectedCategory].map((icon, index) => (
          <div key={index} className="tech-icon">
            <img src={icon.img} alt={icon.alt} />
          </div>
        ))}

</div>
            </div>
        </div>
)

}

export default LeadingTech