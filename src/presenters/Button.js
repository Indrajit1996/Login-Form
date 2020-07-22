import React from 'react';
import {Loader} from '../core/withLoader.jsx';
import PropTypes from 'prop-types';

function Button({type, className, handleClick, disabled,loading,  ...props}) {
    if(loading == true){
        return (
            <React.Fragment>
                <Loader />
                <button
                    type={type}
                    className={className}
                    onClick={handleClick}
                    disabled={disabled}
                    >
                    {props.label}
                </button>
            </React.Fragment>
        )
    }
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