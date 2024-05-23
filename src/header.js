import React from "react";
import styled from 'styled-components'
import Nav from "./nav";

const StyledHeader = styled.header`
background-color: #000000;
min-height: 15vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-bottom: 2px solid #62AB37;
`;

const StyledTitle = styled.h1`
font-size: 4.5rem;
font-family: Bebas Neue;
color: #62ab37;
text-decoration: none;
letter-spacing: .2rem;
margin-top: .5rem;
`;


const StyledSubtitle = styled.h2`
font-size: 2rem;
font-style: italic;
font-family: Kristi;
color: white;
margin-top: -4.5rem;
margin-left: 20rem;
letter-spacing: 2px;
`;




export default class Header extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {

    }
  }
  render() {
    return (
      <StyledHeader><StyledTitle>The Outsiders</StyledTitle>
      <StyledSubtitle>Ebixia's most wanted heros</StyledSubtitle> 
      <Nav />
      </StyledHeader>
     
    );
  }
}