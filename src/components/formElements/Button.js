import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  height: 48px;
	padding: 0 40px;
	border-width: 2px;
	border-style: solid;
	border-color: ${ props => props.diasabled
  ? props.theme.gray
  : props.theme.orange};
  color: ${ props => props.diasabled
   ? props.theme.gray
   : props.theme.orange};
	text-transform: uppercase;
	letter-spacing: 0.25em;
	transition: all 0.3s ease-in-out;
	
	:hover {
	  border-color: ${ props => props.diasabled
    ? props.theme.gray
    : props.theme.pink};
	   color: ${ props => props.diasabled
    ? props.theme.gray
    : props.theme.pink};
`;

//button:focus,
// button:hover {
// 	background-color: black;
// 	color: #fff;
//
// }

export default Button;