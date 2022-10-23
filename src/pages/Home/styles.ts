import styled from "styled-components";


export const HomeContainer = styled.div`
  width: 1440px;
  margin-top: 6rem;
  display: flex;
  margin-left: 10rem;
  margin-bottom: 108px;
`
export const Container = styled.div`
 
  width: 588px;
  gap: 1rem;

    h1{
    font-family: 'Baloo 2';
    color: ${(props) => props.theme['base-title']};
    font-size: 48px;
    font-weight: 800;
    width: 588px;
  }
 
   p{
    font-family: 'Roboto';
    color: ${(props) => props.theme['base-subtitle']};
    width: 588px;
    font-size: 20px;
  }
`
  export const ImageContainer = styled.div `
  display: flex;
  width: 476px ;
  height: 360px;
  
  `
  export  const ItemContainer = styled.div`
    display: grid;
    column-gap: 40px;
    row-gap: 20px;
    margin-top: 66px;
    height: 84px;
    grid: repeat(2, 32px) / auto-flow 231px;
    
  `
 export  const ItemsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  span {
      font-family: 'Roboto';
      color: ${(props) => props.theme['base-subtitle']};
      
    }
`

