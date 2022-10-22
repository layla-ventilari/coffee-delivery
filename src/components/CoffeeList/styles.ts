import styled from "styled-components";


export const CoffeeListContainer = styled.div`
width: 1440px;
height: 1645px;
top: 32px;
`
export const CoffeeTitleContainer = styled.div`
  width: 193px;
  height: 42px;
  margin-top: 32px;
  margin-left: 160px;
  background: ${(props) => props.theme['base-title']};

h1{
    font-family: 'Baloo 2';
    color: ${(props) => props.theme['base-title']};
    font-size: 48px;
    font-weight: 800;
    width: 588px;
  }
 

`