
import { Outlet } from 'react-router-dom'
import { CoffeeList } from '../../components/CoffeeList'
import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      <CoffeeList/>
    </LayoutContainer>
  )
}