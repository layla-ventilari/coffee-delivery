import { HomeContainer, ImageContainer, TitleContainer } from "./styles"
import CoffeImage from '../../assets/coffe.svg'
export function Home(){
  return(
    <HomeContainer>
      <TitleContainer>
        <h1> Encontre o café perfeito para qualquer hora do dia</h1>
        <p> Com o Coffee Delivery você recebe seu café onde estiver  a qualquer hora</p>
      </TitleContainer>
      
      <ImageContainer>
        <img src={CoffeImage} />
      </ImageContainer>
    
    </HomeContainer>
      
  )
}