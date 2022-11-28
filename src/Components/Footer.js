import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer>
        <p>Some text in footer</p>
        <Link to="/about">About version</Link>
    </footer>
  )
}

export default Footer
