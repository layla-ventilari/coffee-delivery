import styled from "styled-components";


export const CoffeeListContainer = styled.div`
width: 1444px;
height: 1645px;
margin-top: 32px;
`
export const CoffeeTitleContainer = styled.div`
  width: 193px;
  height: 42px;
  margin-left: 160px;
  
h1{
    font-family: 'Baloo 2';
    color: ${(props) => props.theme['base-title']};
    font-size: 32px;
    font-weight: 800;
    width: 588px;
  }
 
 
` 
export const  CoffeeListCardContainer = styled.div`
width: 256px;
height: 310px;
margin-left: 10rem;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

export const  CoffeeTagContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 34px;

p {
color: ${(props) => props.theme['yellow-dark']};
font-family: 'Roboto';
font-size: 10px;
font-weight:700;
}

`

export const CoffeeNameContainer = styled.div`
margin-top: 16px;
text-align: center;
h1{
  font-family: 'Baloo 2';
  color: ${(props) => props.theme['base-title']};
  font-size: 20px;
  
}

p {
  font-family: 'Roboto';
  color: ${(props) => props.theme['base-subtitle']};
  margin-top: 8px;
}
`