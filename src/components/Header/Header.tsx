
import React from 'react'
import styled from 'styled-components'
import img from "../Assets/img.png"
import {AiOutlineShoppingCart} from "react-icons/ai"




const Header = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Img src={img} />
            </Left>
            <Navhold>
                <Nav>Product</Nav>
                <Nav>Who we are</Nav>
                <Nav>Blog</Nav>
                <Nav>Contact us</Nav>
            </Navhold>
            <Right>
                <Button>
                    Sign in
                </Button>
                <Icon><AiOutlineShoppingCart />
                    <Circle>0</Circle>
                </Icon>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Header
const Circle = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50px;
    background-color: #03993f;
    color: white;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    top: 20px;
    right: -7px;
`
const Icon = styled.div`
margin-left: 30px;
font-size: 28px;
height: 100%;
display: flex;
align-items: center;
cursor: pointer;
position: relative;
`
const Button = styled.button`
    border: none;
    outline: none;
    height: 50%;
    width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #03993f;
    border-radius: 7px;
    cursor: pointer;
    color: white;
    :hover{
        background-color: white;
        color: #03993f;
        border: 1px solid #03993f;
        transition: 350ms all ease;
    }
`
const Right = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
`
const Nav = styled.div`
    margin-left: 45px;
    color: #03993f;
    font-weight: 500;
    cursor: pointer;
`
const Navhold = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`
const Img = styled.img`
    height: 80px;
`
const Left = styled.div`
    display: flex;
    height: 100%;
    display: flex;
    align-items: center;
`
const Wrapper = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    align-items: cente;
    justify-content: space-between;
`
const Container = styled.div`
    width: 100%;
    display: flex;
    height: 80px;
    justify-content: center;
    /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
    z-index: 3;
    position: fixed;
    background-color: #fff;
`
