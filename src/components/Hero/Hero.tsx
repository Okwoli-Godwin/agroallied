import React from 'react'
import styled from 'styled-components'
import img from "../Assets/leaf1.png"
import img2 from "../Assets/paw.png"

const Hero = () => {
  return (
    <Container>
        <Top><h3>Our Business Areas</h3></Top>
        <br />
        <br />
        <Cardhold>
            <Card>
                <Img src={img} />
                <Img2 src={img2} />
                <Up>Primary Production</Up>
                <p>We enhance yield outcomes in primary agricultural production, through well-structured and organized support such as farm and farmer management, mechanization and irrigation for small and large out grower schemes</p>
            </Card>
            <Card>
                <Img src={img} />
                <Img2 src={img2} />
                <Up>Primary Production</Up>
                <p>We enhance yield outcomes in primary agricultural production, through well-structured and organized support such as farm and farmer management, mechanization and irrigation for small and large out grower schemes</p>
            </Card>
            <Card>
                <Img src={img} />
                <Img2 src={img2} />
                <Up>Primary Production</Up>
                <p>We enhance yield outcomes in primary agricultural production, through well-structured and organized support such as farm and farmer management, mechanization and irrigation for small and large out grower schemes</p>
            </Card>
            <Card>
                <Img src={img} />
                <Img2 src={img2} />
                <Up>Primary Production</Up>
                <p>We enhance yield outcomes in primary agricultural production, through well-structured and organized support such as farm and farmer management, mechanization and irrigation for small and large out grower schemes</p>
            </Card>
            <Card>
                <Img src={img} />
                <Img2 src={img2} />
                <Up>Primary Production</Up>
                <p>We enhance yield outcomes in primary agricultural production, through well-structured and organized support such as farm and farmer management, mechanization and irrigation for small and large out grower schemes</p>
            </Card>
            <Card>
                <Img src={img} />
                <Img2 src={img2} />
                <Up>Primary Production</Up>
                <p>We enhance yield outcomes in primary agricultural production, through well-structured and organized support such as farm and farmer management, mechanization and irrigation for small and large out grower schemes</p>
            </Card>
        </Cardhold>
    </Container>
  )
}

export default Hero
const Up = styled.div`
    font-family: "Open Sans",sans-serif;
    font-size: 19px;
    color: #606060;
    margin-top: 15px;
`
const Img2 = styled.img`
    margin-top: 15px;
`
const Img = styled.img`
    position: absolute;
    right: 0;
    height: 55px;
`
const Card = styled.div`
    width: 28%;
    display: flex;
    height: 300px;
    border-radius: 15px;
    flex-direction: column;
    position: relative;
    padding-left: 20px;
    padding-right: 20px;
    align-items: center;
    /* background-color: red; */
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin-bottom: 25px;
    p{
        text-align: center;
        color: #606060;
        margin-top: 20px;
    }
`
const Cardhold = styled.div`
    width: 85%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Top = styled.div`
    h3{
        color: #008737;
    font-weight: 900;
    font-size: 3.5em;
    font-size: 45px;
    font-family: "Cabin Sketch",cursive;
    }
`

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`