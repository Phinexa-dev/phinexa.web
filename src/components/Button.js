import React from 'react';
import './Button.scss';
import { useNavigate } from 'react-router-dom';

const Button = ({ text, rightIcon, onClickRoute }) => {
    const navigate = useNavigate();

  const handleClick = () => {
    if (onClickRoute) {
        navigate(onClickRoute);
    }
  };

  return (
    <button className="custom-button" onClick={handleClick}>
      {text}
      {rightIcon && <span className="right-icon">{rightIcon}</span>}
    </button>
  );
};

export default Button;
