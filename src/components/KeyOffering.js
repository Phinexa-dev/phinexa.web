import React from 'react';
import Button from './Button';
import './KeyOffering.scss';
import { motion } from "framer-motion"

function KeyOffering({index, imagePath, title, description, route}) {
    if (index % 2 === 0) {
        return (
            <motion.div 
            initial="hidden"
            whileInView="show"
            className="animated-offering">
                <motion.div 
                variants={{
                    hidden: {x: "-20%"},
                    show: {x: "0%", transition: { duration: 0.25, type: "spring", stiffness: 100 }}
                }}
                className="content">
                    <p className="title">{title}</p>
                    <p className="description">{description}</p>
                    <Button text={"Learn more"} rightIcon={<i class="fa-solid fa-arrow-right"></i>} onClickRoute={route}/>
                </motion.div>
                <motion.img 
                variants={{
                    hidden: {x: "20%"},
                    show: {x: "0%", transition: { duration: 0.25, type: "spring", stiffness: 100}}
                }}
                src={process.env.PUBLIC_URL + imagePath} alt="" />
            </motion.div>
        )
    }
    return (
        <div className="animated-offering">
            <motion.img 
            variants={{
                hidden: {x: "-50%"},
                show: {x: "0%", transition: { duration: 0.5, type: "spring", stiffness: 100 }}
            }}
            initial="hidden"
            whileInView="show"
            src={process.env.PUBLIC_URL + imagePath} alt="" />
            <motion.div 
            variants={{
                hidden: {x: "50%"},
                show: {x: "0%", transition: { duration: 0.5, type: "spring", stiffness: 100 }}
            }}
            initial="hidden"
            whileInView="show"
            className="content">
                <p className="title">{title}</p>
                <p className="description">{description}</p>
                <Button text={"Learn more"} rightIcon={<i class="fa-solid fa-arrow-right" ></i>} onClickRoute='/solutions'/>
            </motion.div>
        </div>
    )
}

export default KeyOffering