import React from 'react';
import {render} from 'react-dom';
import {Button} from 'reactstrap';


class App extends React.Component {
  render () {
    return <Button color="success">Welcome</Button>;
  }
}

render(<App/>, document.getElementById('app'));
