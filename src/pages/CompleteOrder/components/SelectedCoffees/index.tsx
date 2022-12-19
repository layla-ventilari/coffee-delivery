import { TitleText } from "../../../../components/Typography";
import { CoffeCartCard } from "../CoffeeCartCard";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees(){
  return(
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
      Cafés selecionados
      </TitleText>
      <DetailsContainer>
        <CoffeCartCard />
        <CoffeCartCard />
        <CoffeCartCard />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}

