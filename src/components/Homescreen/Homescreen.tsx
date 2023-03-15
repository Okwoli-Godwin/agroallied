import React from 'react'
import styled from 'styled-components'
import Header from '../Header/Header'
import Categories from './Categories'
import Heroblog from './Heroblog'
import Holdbox from './Holdbox'
import Prodhero from './Prodhero'
import Productdisplay from './Productdisplay'

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
      <br />
      <br />
      <Heroblog />
      <br />
      <br />
      <Productdisplay />
      <br />
      <br />
      <br />
      <br />
      <Holdbox />
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