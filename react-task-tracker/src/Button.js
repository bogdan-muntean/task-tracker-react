import React from 'react'
import PropTypes from 'react'

const Button = ({color, text, onClick}) => {
  return <button 
            onClick={onClick}
            style={{backgroundColor: color}} 
            className='button'> 
                {text} 
        </button>

}

Button.defaultProps = {
    color: 'yellow',
}

Button.propType = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}

export default Button