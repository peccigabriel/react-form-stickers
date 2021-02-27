import React from 'react';
import './button.scss';

const Button = ({ 
  children, 
  action, 
  disabled, 
  arialabel, 
  className, 
  type }) => {
    
  const classes = ['button'];
  if (className) classes.push(className);
  if (disabled) classes.push('button--disabled');

  function handleAction(e) {
    e.preventDefault();
    if (action) action();
  }

  return (
    <button
      type={type}
      className={classes.join(' ')}
      onClick={(e) => handleAction(e)}
      disabled={disabled}
      aria-label={arialabel}
    >
      {children}
    </button>
  );
};

export default Button;
