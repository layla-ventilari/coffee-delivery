import { Button } from "../../../../components/Button";
import { RegularText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { ConfirmationSectionContainer } from "./styles";



export function ConfirmationSection(){

  const DELIVERY_PRICE = 3.5;

  const { cartItemsTotal, cartQuantity } = useCart();
  const cartTotal = DELIVERY_PRICE + cartItemsTotal;
  const formattedItemsTotal = formatMoney(cartItemsTotal);
  const formattedICartTotal = formatMoney(cartTotal);
  const formatDeliveryPrice = formatMoney( DELIVERY_PRICE);


  return(
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R${formattedItemsTotal}</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R${ formatDeliveryPrice }</RegularText>
      </div>
      <div>
        <RegularText weight="700" color="subtitle" size="l">Total</RegularText>
        <RegularText weight="700" color="subtitle" size="l">R${ formattedICartTotal }</RegularText>
      </div>
      <Button 
      text="Confirmar Pedido" 
      disabled={cartQuantity <= 0}
      type="submit"
      />
    </ConfirmationSectionContainer>
  );
}