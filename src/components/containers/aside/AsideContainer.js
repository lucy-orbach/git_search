import React, { useState } from 'react';
import  {connect } from 'react-redux';
import styled from 'styled-components';
import { loadUsers, loadUsersError, loadUsersSuccess } from 'src/actions/userActions';
import Button from 'src/components/formElements/Button';
import InputGroup from 'src/components/formElements/InputGroup';



const StyledComponent = styled.aside`
  padding: 60px 40px;
  border-right: ${props => `2px solid ${props.theme.orange}`}
`;

const AsideContainer = props => {
  let [ value, setValue ] = useState('');

  const handleInputChange = ({target}) => {
    if (target.value !== value) setValue(target.value);
  };

  const handleSubmit = () => {
    props.loadUsers(value);
  };

  return (
      <StyledComponent>
        <h1>Get git users:</h1>
        <InputGroup type="text"
                    label="Username"
                    name="username"
                    value={value}
                    onChange={handleInputChange} />
        <Button disabled={false} onClick={handleSubmit} data-test="hello">Get Users</Button>
      </StyledComponent>
    );

};

const mapDispatchToProps =  { loadUsers };

export default connect(null, mapDispatchToProps )(AsideContainer);