import logoDelivery from '../../assets/logo-delivery.svg'
import location from '../../assets/location.svg'
import { HeaderContainer, CartContainer, NavContainer} from './styles'
import {NavLink} from 'react-router-dom'
import {ShoppingCart } from 'phosphor-react';

export function Header(){
  return (
    <HeaderContainer>
    <nav>
      <NavContainer>
         <img src={logoDelivery}/>
          <CartContainer>
            <img src={location} /> 
            <NavLink to="/cart">
              <ShoppingCart />
            </NavLink>
          </CartContainer>
      </NavContainer>
    </nav>
    </HeaderContainer>
  )
}