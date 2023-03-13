import React, {useState} from 'react'
import styled from 'styled-components'
import Animalproduce from './Animalproduce'
import Fruits from './Fruits'
import Plantproduce from './Plantproduce'


const Categories = () => {
    const [show, setShow] = useState(true)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)

    const Toggle = () => {
        setShow(true)
        setShow2(false)
        setShow3(false)
    }

    const Toggle2 = () => {
        setShow2(true)
        setShow(false)
        setShow3(false)
    }

    const Toggle3 = () => {
        setShow3(true)
        setShow2(false)
        setShow(false)
    }
  return (
    <Container>
        <Wrapper>
            <Topnavs>
                <Navs onClick={Toggle}>Plant Produce</Navs>
                <Navs onClick={Toggle2}>Animal Produce</Navs>
                <Navs onClick={Toggle3}>Fruits and Vegetables</Navs>
                <Navs>Oil and Crops</Navs>
            </Topnavs>

            {show ? (
                <Plantproduce />
            ) : null}

            {show2 ? (
                <Animalproduce />
            ) : null}

            {show3 ? (
                <Fruits />
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