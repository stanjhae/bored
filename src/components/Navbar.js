import React from 'react'
import { Navbar, Nav, Icon } from 'rsuite'
import { Link } from 'react-router-dom'

const Navbarr = () => {
  return (
    <Navbar>
      <Navbar.Body>
        <Nav>
          <Nav.Item icon={<Icon icon="play"/>}><Link to='/'>Activity</Link></Nav.Item>
          <Nav.Item icon={<Icon icon="list"/>}><Link to='/list'>List</Link></Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  )
}

export default Navbarr
