import React from 'react';
import PropTypes from 'prop-types';

export default class App extends React.Component {

  conponentDidMount() {
    // Fetch data
  }

  render() {
    return (
      <main role="main" className="main">
        <div className="app-wrapper">
          {this.props.children}
        </div>
      </main>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired
};
