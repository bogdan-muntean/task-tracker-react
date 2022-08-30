import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
    const onClick = () => {
        console.log("button was clicked")
    }

    return (
    <header className='header'>
        <h1>{props.title}</h1>
        <Button color='yellow' text='Add' onClick={onClick}/>
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