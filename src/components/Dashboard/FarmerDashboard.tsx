import React from 'react'
import styled from 'styled-components'
import Farmerdashhome from './Farmerdashhome'
import Sidebar from './Sidebar'

const FarmerDashboard = () => {
  return (
      <Container>
         <Head>
              
      </Head>
      <Sidebar />
      <Farmerdashhome />
    </Container>
  )
}

export default FarmerDashboard
const Head = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    position: fixed;
    background-color: #f1f1f1;
`

const Container = styled.div`
    width: 100%;
    display: flex;
`