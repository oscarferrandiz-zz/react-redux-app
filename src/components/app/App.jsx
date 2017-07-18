import React from 'react';
import PropTypes from 'prop-types';
import { fetchDatasets } from 'modules/datasets';
import { connect } from 'react-redux';

class App extends React.Component {

  componentDidMount() {
    // Fetch data
    this.props.fetchDatasets();
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
  fetchDatasets: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  fetchDatasets
};

export default connect(null, mapDispatchToProps)(App);
