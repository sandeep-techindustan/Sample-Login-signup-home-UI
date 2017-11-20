import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const FooterLinks = (props) => {
  return (
    <span>
      <Link to="/under-development">{props.linkName}</Link>
    </span>
  )
}



const Footer = () => {
  return (
    <Row>
      <Col md={12}>
        <div className="footer-container">
          <div>
            <div className="footer-link"><FooterLinks link="#" linkName="About" /></div>
            <div className="footer-link"><FooterLinks link="#" linkName="Contact" /></div>
            <div className="footer-link"><FooterLinks link="#" linkName="Privacy-Policy" /></div>
            <div className="footer-link"><FooterLinks link="#" linkName="Services" /></div>
          </div><hr />
              All Rights are reserved 2017 @abc.com
        </div>
      </Col>
    </Row>
  )
}

export default Footer
