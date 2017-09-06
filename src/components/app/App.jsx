import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchDatasets } from '@/redux/modules/datasets/actions';

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
