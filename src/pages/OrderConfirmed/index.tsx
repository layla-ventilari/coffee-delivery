import { RegularText, TitleText } from "../../components/Typography";
import { OrderConfirmedContainer, OrderDetailsContainer} from "./styles";
import confirmedOrderImg from "../../assets/confirmed-order.svg"
import { InfoWithIcon } from "../../components/InfoWithIcon";
import { MapPin, Clock, CurrencyDollar } from "phosphor-react"
import { useTheme } from "styled-components";


export function OrderConfirmedPage(){
  const { colors } = useTheme();

  return(
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido confirmado</TitleText>
        <RegularText size="l" color="subtitle">
          Agora é só aguardar que logo o pedido chegará a té você
        </RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
         <InfoWithIcon 
          icon={<MapPin  weight="fill"/>}
          iconBg={colors["brand-purple"]}
          text={
            <RegularText>
              Entrega em <strong>Rua João Martinelli, 102</strong> 
              <br />
              Farrapos - Porto Alegre, RS
            </RegularText>
          }
         />
         <InfoWithIcon 
          icon={<Clock  weight="fill"/>}
          iconBg={colors["brand-yellow"]}
          text={
            <RegularText>
              Previsão de Entrega
              <br />
              <strong>20 min - 30min</strong> 
            </RegularText>
          }
         />
          <InfoWithIcon 
            icon={<CurrencyDollar  weight="fill"/>}
            iconBg={colors["brand-yellow-dark"]}
            text={
              <RegularText>
                Pagamento na entrega
                <br />
                <strong>Cartão de Crédito</strong> 
              </RegularText>
          }
         />
        </OrderDetailsContainer>
        <img src={confirmedOrderImg} alt="" />
      </section>
    </OrderConfirmedContainer>
  );
}