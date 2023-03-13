import React from 'react'
import styled from 'styled-components'
import Header from '../Header/Header'
import Categories from './Categories'
import Prodhero from './Prodhero'

const Homescreen = () => {
  return (
    <div>
        <Header />
        <br />
        <br />
        <br />
        <br />
        <Prodhero />
        <br />
        <br />
        <Categories />
    </div>
  )
}

export default Homescreen
const Wrapper = styled.div`
    width: 95%;
    display: flex;
`
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`