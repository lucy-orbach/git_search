import React from 'react';
import PropTypes from 'prop-types';

export default class DefaultErrorBoundary extends React.Component {
  state = {
    isError: false
  };

  static getDerivedStateFromError() {
    return { isError: true };
  }

  render() {
    const { isError } = this.state;
    const { children } = this.props;

    return isError ? <h1>KaBOOM!</h1> : children;
  }
}

DefaultErrorBoundary.propTypes = {
  children: PropTypes.object
};