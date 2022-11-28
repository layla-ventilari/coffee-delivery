import {  BuyContainer, CartButton, CoffeeListCardContainer, CoffeeListContainer, CoffeeNameContainer, CoffeeTagContainer, CoffeeTitleContainer, CounterContainer } from "./styles"
import CoffeeImage from "../../assets/coffee/tradicional.svg"
import CartImage from "../../assets/cart.svg"
import { useState } from "react"

import { ShoppingCart } from "phosphor-react"

export function CoffeeList(){
  const [count, setCount] = useState(0);
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
        <BuyContainer>
          <p>R$</p>
          <h1>9,90</h1> 
          <CounterContainer>
            <button onClick={() => setCount(count - 1)}>-</button>
            <p>1</p>
            <button onClick={() => setCount(count + 1)}>+</button>
          
          </CounterContainer>
          <CartButton>
            <ShoppingCart color="#fff" size={24}/>
          </CartButton>
        </BuyContainer>
      </CoffeeListCardContainer>
    </CoffeeListContainer>
    
  )
}


