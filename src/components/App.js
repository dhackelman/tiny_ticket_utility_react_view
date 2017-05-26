import React from 'react';
import axios from 'axios';

class App extends React.Component {
    constructor() {
        super();
        this.state = {};
      }



    render() {
      const childWithProp = React.Children.map(this.props.children, (child) => {
          return React.cloneElement(child);
      });

        return (
            <div className="main">
              <h1>Yo</h1>
            </div>
        );
    }
}

export default App;
