import React from 'react'
import styled from 'styled-components';

const Farmerdashhome = () => {
  return (
    <Container>
			<Content>Dashboard home</Content>
		</Container>
  )
}

export default Farmerdashhome

const Content = styled.div`
	margin-top: 70px;
	margin-left: 20px;
`;

const Container = styled.div`
	width: calc(100% - 250px);
	min-height: 100vh;
	background-color: #f1f1f1;
`;