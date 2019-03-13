import React from 'react';
import { connect } from 'react-redux';

const MainContainer = ({name, ...props}) => {
  return (
    <main>
      <h1>Git Search</h1>
      {  name && <h2>{`Git users with name: ${name}`}</h2>}
    </main>
  );
};

const mapStateToProps = state => {
  console.log('state', state);
  return { ...state.userReducer };
};
export default connect(mapStateToProps)(MainContainer);