var React = require('react');
import { Button } from 'react-bootstrap';

var Main = (props) => {
  return (
    <div>
      <div>
        <div>
          <p>Main.jsx Rendered</p>
          <Button>Click me!</Button>
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
