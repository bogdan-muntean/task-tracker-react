import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <header className='header'>
        <h1>{props.title}</h1>
        <button className='button'>Add</button>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}


// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'yellow',
// }

export default Header