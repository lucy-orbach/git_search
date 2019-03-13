import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledComponent = styled.fieldset`
  position: relative;
  padding: 5px 0 15px;
  
  label {
    display: block;
    transform: ${props => `translateY(${props.children[0].props.value ? '-75px' : '-45px'})`};
    font-size: ${props => `${props.children[0].props.value ? '0.8' : '1'}rem`};
    transition: all 0.3s ease-in-out;
   }
   
  input:focus + label {
    transform: translateY(-75px);
    font-size: 0.8em;  
  }
`;


const StyledInput = styled.input`
  height: 40px;
  border-bottom: ${props => `1px dotted ${props.theme.orange}`};
`;

const StyledError = styled.p``;

const InputGroup = ( { error, label, name, type, ...props })=> {

  return (
    <StyledComponent>
      <StyledInput type={type || 'text' } id={name} name={name} {...props} />
      <label htmlFor={name}>{label}</label>
      <StyledError error={error}/>
    </StyledComponent> );
};

InputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number ]),
};

export default InputGroup;

