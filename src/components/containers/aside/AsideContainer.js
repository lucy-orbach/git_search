import React, { useState } from 'react';
import  {connect } from 'react-redux';
import styled from 'styled-components';
import  { loadUsers} from 'src/actions/userActions';
import Button from 'src/components/formElements/Button';


const StyledComponent = styled.aside`
  padding: 60px 40px;
  border-right: ${props => `2px solid ${props.theme.orange}`}
`;

const AsideContainer = props => {
  let [ value, setValue ] = useState('');
  const handleInputChange = ({target: {value}, ...e}) => {
    console.log(value);
    setValue(value);
  };
  return (
      <StyledComponent>
        <h1>Hello W</h1>
        <input type="text"
               value={value}
               placeholder="Enter username"
               onChange={handleInputChange} />
        <Button disabled={false} onClick={props.loadUsers}>Get Users</Button>
      </StyledComponent>
    );

};

const mapDispatchToProps =  { loadUsers };

export default connect(null, mapDispatchToProps )(AsideContainer);