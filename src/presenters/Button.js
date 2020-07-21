import React from 'react';
import PropTypes from 'prop-types';

function Button({type, className, handleClick, disabled, ...props}) {
  
    return (
        
        <button
            type={type}
            className={className}
            onClick={handleClick}
            disabled={disabled}
        >
            {props.label}
        </button>
    );
}

export default Button;