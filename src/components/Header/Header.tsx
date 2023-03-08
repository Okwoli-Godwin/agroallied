import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>LOGO.</Logo>

        <Navs>
          <Nav>Home</Nav>
          <Nav>Services</Nav>
          <Nav>About</Nav>
          <Nav>Contact us</Nav>
        </Navs>

        <Auth>
          <Signup>Sign Up</Signup>
          <Signup>Sign Out</Signup>
        </Auth>
       
      </Wrapper>
    </Container>
  )
}

export default Header

const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
height: 15vh;
background-color: #03993f;
`

const Wrapper = styled.div`
width: 80%;
display: flex;
align-items: center;
justify-content: space-between;
color: white
`
const Navs = styled.div`
display: flex;
`
const Nav = styled.div`
margin-right: 30px;
`
const Logo = styled.div``
const Signup = styled.div`
margin-right: 30px;
`
const Auth = styled.div`
  display: flex;
`