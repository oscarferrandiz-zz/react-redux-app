import React from 'react';
import PropTypes from 'prop-types';
import { getDatasets } from 'modules/datasets';
import { connect } from 'react-redux';

class App extends React.Component {

  componentDidMount() {
    // Fetch data
    this.props.getDatasets();
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
  children: PropTypes.element.isRequired,
  getDatasets: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  getDatasets
};

export default connect(null, mapDispatchToProps)(App);
