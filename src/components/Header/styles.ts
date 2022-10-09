import styled from "styled-components";

export const HeaderContainer = styled.header`
display: flex;
align-items: center;
justify-content: space-between;

nav{
  display: flex;
  width: 90rem;
  height: 6.5rem;
  padding: 2rem 16rem; 
}

`
export const NavContainer = styled.div `
display: flex;
align-items: center;
justify-content: space-between;
gap: 30rem;
`
export  const CartContainer = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 flex: 1;
 gap: 1rem;

 > svg {
  color: ${(props) => props.theme['yellow-light']};
 }

`