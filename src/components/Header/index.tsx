import logoDelivery from '../../assets/logo-delivery.svg'
import location from '../../assets/location.svg'
import { HeaderContainer, HeaderButton, ButtonContainer} from './styles'
import {NavLink} from 'react-router-dom'
import {ShoppingCart, MapPin } from 'phosphor-react';
import { useCart } from '../../hooks/useCart';

export function Header(){
   const { cartQuantity } = useCart();
   
  return (
    <HeaderContainer>
      <div className="container">
         <NavLink to="/">
         <img src={logoDelivery}/>
         </NavLink>
          <ButtonContainer>
            <HeaderButton variant="purple">
              <MapPin size={20} weight="fill"/>
                Porto Alegre, RS
            </HeaderButton>
            <NavLink to="/completeOrder">
              <HeaderButton variant="yellow">
                {cartQuantity >+ 1 && <span>{ cartQuantity }</span>}
                <ShoppingCart size={20} weight="fill"/>
              </HeaderButton>
            </NavLink>
          </ButtonContainer>
      </div>
    </HeaderContainer>
  )
}