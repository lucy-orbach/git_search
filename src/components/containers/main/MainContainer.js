import React from 'react';
import { connect } from 'react-redux';

const MainContainer = props => {
  return (
    <main>Data goes here</main>
  );
};

const mapStateToProps = state => {
  console.log('state', state);
  return { ...state.userReducer };
};
export default connect(mapStateToProps)(MainContainer);