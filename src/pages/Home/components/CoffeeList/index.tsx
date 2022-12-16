import { TitleText } from "../../../../components/Typography"
import { CoffeeCard } from "../CoffeeCard";
import { CoffeeListContainer, CoffeeListContent } from "./styles";


export function CoffeeList(){
  return(
    <CoffeeListContainer className="container">
        <TitleText size="l" color="subtitle">
          Nossos cafés
        </TitleText>
        <CoffeeListContent>
          <CoffeeCard />  
          <CoffeeCard />  
          <CoffeeCard />  
          <CoffeeCard />  
          <CoffeeCard />  
          <CoffeeCard /> 
        </CoffeeListContent>
    </CoffeeListContainer>
    
    
  )
}


