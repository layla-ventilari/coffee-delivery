import { HomeContainer, ImageContainer, ItemContainer, ItemsContainer } from "./styles"

import { Intro } from "./components/intro"
import { CoffeeList } from "./components/CoffeeList"

export function Home(){
  
  return(
    <HomeContainer>
      <Intro />
      <CoffeeList />
    </HomeContainer>
      
  )
}