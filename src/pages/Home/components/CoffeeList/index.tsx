import { TitleText } from "../../../../components/Typography"
import { coffees } from "../../../../data/coffees";
import { CoffeeCard } from "../CoffeeCard";

import { CoffeeListContainer, CoffeeListContent } from "./styles";
export function CoffeeList(){
  return(
    <CoffeeListContainer className="container">
        <TitleText size="l" color="subtitle">
          Nossos cafés
        </TitleText>
        <CoffeeListContent>
          {coffees.map((coffee) =>(
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </CoffeeListContent>
    </CoffeeListContainer>
    
    
  )
}


