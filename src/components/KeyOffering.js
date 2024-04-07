import React from 'react';
import Button from './Button';
import './KeyOffering.scss';

function KeyOffering({index, imagePath, title, description, route}) {
    if (index % 2 === 0) {
        return (
            <div className="animated-offering">
                <div className="content">
                    <p className="title">{title}</p>
                    <p className="description">{description}</p>
                    <Button text={"Learn more"} rightIcon={<i class="fa-solid fa-arrow-right" route={route}></i>}/>
                </div>
                <img src={process.env.PUBLIC_URL + imagePath} alt="" />
            </div>
        )
    }
    return (
        <div className="animated-offering">
            <img src={process.env.PUBLIC_URL + imagePath} alt="" />
            <div className="content">
                <p className="title">{title}</p>
                <p className="description">{description}</p>
                <Button text={"Learn more"} rightIcon={<i class="fa-solid fa-arrow-right" route={route}></i>}/>
            </div>
        </div>
    )
}

export default KeyOffering