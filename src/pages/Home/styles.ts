import styled from "styled-components";


export const HomeContainer = styled.div`
  width: 100%;
  margin-top: 6rem;
  display: flex;
  
`
export const TitleContainer = styled.div`
  margin-left: 10rem;
  width: 588px;
  gap: 1rem;

  h1{
    font-family: 'Baloo 2';
    color: ${(props) => props.theme['base-title']};
    font-size: 48px;
    font-weight: 800;
    height: 124px;
  }
  p{
    font-family: 'Roboto';
    color: ${(props) => props.theme['base-subtitle']};
   
  }
`

  export const ImageContainer = styled.div `
  display: flex;
 
  `
