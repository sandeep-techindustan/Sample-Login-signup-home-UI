import React from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UnderDevelopment = () => {
  return (
    <div>
      <Image src="http://www.szeconcept.com/under_construction.jpg" width="100%" alt="This page is under Construction" />
      <Link to="/">Home</Link><br />
    </div>
  )
}

export default UnderDevelopment
