import logoDelivery from '../../assets/logo-delivery.svg'
import location from '../../assets/location.svg'
import { HeaderContainer, CartContainer, NavContainer} from './styles'
import {NavLink} from 'react-router-dom'
import {ShoppingCart } from 'phosphor-react';

export function Header(){
  return (
    <HeaderContainer>
      <NavContainer>
         <img src={logoDelivery}/>
          <CartContainer>
            <img src={location} /> 
            <NavLink to="/cart">
              <ShoppingCart color='#DBAC2C' size={24} />
            </NavLink>
          </CartContainer>
      </NavContainer>
    </HeaderContainer>
  )
}