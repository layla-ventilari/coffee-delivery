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
  margin-bottom: 34px;
  
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
background: ${(props) => props.theme['base-card']};

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
img{
  margin-top: -20px;
};

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

export const BuyContainer = styled.div `
display: flex;
justify-content: space-evenly;
align-items: center;

margin-top: 36.5px;
width: 208px;
height: 38px;

h1{
  font-family: 'Baloo 2';
  color: ${(props) => props.theme['base-title']};
}

p{
  font-family: 'Baloo 2';
  color: ${(props) => props.theme['base-subtitle']};
  font-weight: 100;
}
`
export const CounterContainer = styled.div`

display: flex;
justify-content: center;
align-items: center;
padding: 8px;
gap: 8px;
width: 72px;
height: 38px;
border-radius: 6px;
background: ${(props) => props.theme['base-button']};

p {
font-size: 16px;
font-weight: 400;
font-family: 'Roboto';

}
button {
  border:none;
  font-size: 18px;
  background: transparent;
  color: ${(props) => props.theme['purple']};
}
`
export const CartButton = styled.button `
display: flex;
justify-content: center;
width: 38px;
height: 38px;
border-radius: 6px;
padding: 8px;
gap: 8px;
background: ${(props) => props.theme['purple-dark']};
border: none;
`