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

  a {
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

`