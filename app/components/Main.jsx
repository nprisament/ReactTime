var React = require('react');
const Nav = require('Nav');
import { Button } from 'react-bootstrap';

var Main = (props) => {
  return (
    <div>
      <div>
        <div>
          <Nav/>
          <p>Main.jsx Rendered</p>
          <Button>Click me!</Button>
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
