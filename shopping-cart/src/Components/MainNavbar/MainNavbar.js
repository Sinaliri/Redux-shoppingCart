import React from 'react'
//React-bootstrap
import { Navbar , Container , Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const MainNavbar = () => {
  return (
    <Navbar bg="light" variant="light" className='mb-4'>
        <Container>
          <Nav className="me-auto">
            <Link to="/Store" >Store</Link>
            <Link className='ms-3'  to="/Cart" >Cart</Link>
            
          </Nav>
        </Container>
      </Navbar>
  )
}

export default MainNavbar