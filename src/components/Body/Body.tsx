import React from 'react'
import styled from 'styled-components'
import img from "../Assets/leaf.png"

const Body = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Top><h2>To create prosperity</h2></Top>
                <Card><h4>For the economy</h4> <p>We consciously create opportunities for smallholder farmers to improve their incomes and quality of life</p></Card>

            </Left>
            <Right>
                <Img src={img} />
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Body
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Right = styled.div`
    width: 50%;
    display: flex;
    overflow: hidden;
    height: 450px;
    border-radius: 20px;
    margin-top: 70px;
`
const Card = styled.div`
    width: 85%;
    height: 120px;
    background-color: white;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 10px;
    padding-left: 25px;
    padding-right: 27px;
    h4{
        color: #03993f;
    }
    p{
        color: #03993f;
    }
`
const Top = styled.div`
    h2{
        color: #03993f;
    font-weight: 900;
    font-size: 3.5em;
    font-family: "Cabin Sketch",cursive;
    transition: all 1s ease;
    font-size: 45px;
    }
`
const Left = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    height: 450px;
    justify-content: center;
    /* align-items: center; */
    background-color: white;
`
const Wrapper = styled.div`
    width: 90%;
    display: flex;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`