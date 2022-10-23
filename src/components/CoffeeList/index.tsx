import {  CoffeeListCardContainer, CoffeeListContainer, CoffeeNameContainer, CoffeeTagContainer, CoffeeTitleContainer } from "./styles"
import CoffeeImage from "../../assets/coffee/tradicional.svg"

export function CoffeeList(){
  return(
    <CoffeeListContainer>
      <CoffeeTitleContainer>
        <h1>Nossos cafés</h1>
      </CoffeeTitleContainer>
      <CoffeeListCardContainer>
        <CoffeeTagContainer>
        <img src={CoffeeImage} alt="" />
        <p>TRADICIONAL</p>
        </CoffeeTagContainer>
        <CoffeeNameContainer>
          <h1>Expresso Tradicional</h1>
          <p>O tradicional café feito com água quente e grãos moídos</p>
        </CoffeeNameContainer>
      </CoffeeListCardContainer>
    </CoffeeListContainer>
    
  )
}


