import styled from "@emotion/styled";
import React from 'react';
import logo from '../assets/logo-big.png'

const Logo =  styled.div`
  width: 100%;
  height: 100%;
`;

export default function Derp(){
  return(
    <Logo>
      <img src={logo} alt=""/>
    </Logo>
  )
}
