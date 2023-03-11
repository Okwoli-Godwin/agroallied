import React, {useState} from 'react'
import styled from 'styled-components'
import Plantproduce from './Plantproduce'


const Categories = () => {
    const [show, setShow] = useState(true)

    const Toggle = () => {
        setShow(!show)
    }
  return (
    <Container>
        <Wrapper>
            <Topnavs>
                <Navs onClick={Toggle}>Plant Produce</Navs>
                <Navs>Animal Produce</Navs>
                <Navs>Fruits and Vegetables</Navs>
                <Navs>Oil and Crops</Navs>
            </Topnavs>

            {show ? (
                <Plantproduce />
            ) : null}
        </Wrapper>
    </Container>
  )
}

export default Categories
const Navs = styled.div`
    margin-left: 45px;
    cursor: pointer;
    font-size: 20px;
    color: #03993f;
`
const Topnavs = styled.div`
    display: flex;
`
const Wrapper = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`