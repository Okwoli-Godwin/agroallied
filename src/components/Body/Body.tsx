import React from 'react'
import styled from 'styled-components'

const Body = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                
            </Left>
        </Wrapper>
    </Container>
  )
}

export default Body
const Left = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    height: 400px;
    background-color: red;
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