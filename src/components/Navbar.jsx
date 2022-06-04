import React from 'react'
import Styled from 'styled-components'
import {BsSearch} from 'react-icons/bs';
import { Badge } from '@mui/material';
import {RiShoppingCartLine} from 'react-icons/ri';
//import SearchIcon from '@material-ui/icons/Search';
//import styled from '@emotion/styled';
//import { SearchIcon } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Container= Styled.div`
    height: 60px;
`;
const Wrapper = Styled.div`
    padding:10px 10px;
    display:flex;
    justify-content: space-between;
    align-items:center;
    `;
const Left=Styled.div`
    flex:1;
    display:flex;
    align-items:center;
`;
const Language=Styled.span`
font-size:14px;
cursor:pointer;
display:flex;
`;
const SearchContainer=Styled.div`
border:1px solid lightgray;
display:flex;
align-items:center;
margin-left:25px;
padding:5px;
`;
const Input=Styled.input`
  border:none;
`;
const Center=Styled.div`
    flex:1;
    text-align:center;
`;
const Logo = Styled.h1`
    font-weight:bold;
`;
const Right=Styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
`;
const MenuItem =Styled.div`
  font-size:14px;
  cursor:pointer;
`;
//const MenuItem  


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
      
      <Left>
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            <Language>EN</Language>
            <SearchContainer>
              <Input/><BsSearch style={{color:"gray", fontSize:"16"}}/>
            </SearchContainer>
           
      </Left>
      <Center>
           <Logo>FashionHub</Logo>
      </Center>
      <Right>
            <MenuItem>REGISTER&nbsp;&nbsp; </MenuItem>
            <MenuItem>SIGN IN &nbsp;&nbsp;</MenuItem>
            <MenuItem>&nbsp;&nbsp;
            <Badge badgeContent={4} color="primary">
              &nbsp;<RiShoppingCartLine />
              </Badge>   
            </MenuItem>
      </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
