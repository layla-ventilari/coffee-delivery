import { Container, HomeContainer, ImageContainer, ItemContainer, ItemsContainer } from "./styles"
import CoffeImage from '../../assets/coffe.svg'
import CartImage from '../../assets/cart.svg'
import ClockImage from '../../assets/clock.svg'
import CubeImage from '../../assets/cube.svg'
import CupImage from '../../assets/cup.svg'
import { CoffeeList } from "../../components/CoffeeList"

export function Home(){
  return(
    <HomeContainer>
      <Container>
          <h1> Encontre o café perfeito para qualquer hora do dia</h1>
          <p> Com o Coffee Delivery você recebe seu café onde estiver a <br/> qualquer hora</p>
      <ItemContainer>
        <ItemsContainer>
          <img src={CartImage} />
         <span> Compra simples e segura</span> 
        </ItemsContainer>
        <ItemsContainer>
          <img src={CubeImage} />
          <span>Embalagem mantém o café intacto</span>
        </ItemsContainer>
        <ItemsContainer>
          <img src={ClockImage} />
          <span>Entrega rápida e rastreada</span>
        </ItemsContainer>
        <ItemsContainer>
          <img src={CupImage} />
          <span>O café chega fresquinho até você</span> 
        </ItemsContainer>
      </ItemContainer>
      </Container>
      <ImageContainer>
        <img src={CoffeImage} />
      </ImageContainer>
    </HomeContainer>
      
  )
}