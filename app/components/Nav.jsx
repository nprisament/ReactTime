const React = require('react');
const {IndexLink, Link} = require('react-router');
import { Navbar, Nav, Header, Brand, NavItem } from 'react-bootstrap';

module.exports = () => (
	<div>
	<Navbar>
    <Navbar.Header>
      <Navbar.Brand>React Timer</Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem>
      	<IndexLink to="/">Timer</IndexLink>
      </NavItem>
      <NavItem>
      	<Link to="/countdown">Countdown</Link>
      </NavItem>
    </Nav>
  </Navbar>
  </div>
);	