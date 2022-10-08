import logoDelivery from '../../assets/logo-delivery.svg'
import location from '../../assets/location.svg'
import { HeaderContainer } from './styles'
import {NavLink} from 'react-router-dom'

export function Header(){
  return (
    <HeaderContainer>
    <nav>
      <div>
        <NavLink>
         <img src={logoDelivery}/>
          
        </NavLink>
         <img src={location} /> 
        </div>
    </nav>
    </HeaderContainer>
  )
}