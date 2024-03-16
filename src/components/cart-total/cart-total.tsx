import { Headline, Text } from '@vkontakte/vkui';
import { FC } from 'react';
import styles from './cart-total.module.css';
import { useAppSelector } from '../../services/hooks/hooks';

const CartTotal: FC = () => {
  const { cart } = useAppSelector((state) => state.cart);

  let totalPrice = 0;
  let totalAmount = 0;
  cart.forEach((item) => {
    totalPrice += item.price * item.amount; // optimize later
    totalAmount += item.amount;
  });

  const totalPriceDecimalFix = parseFloat(totalPrice.toFixed(2));
  const itemWord = totalAmount === 1 ? 'товар' : 'товаров';
  return (
    <section className={styles.cart__total}>
      {cart.length > 0 && (
        <>
          <Headline level="1">
            Итого {totalAmount} {itemWord}:
          </Headline>

          <Text>{totalPriceDecimalFix}</Text>
        </>
      )}
    </section>
  );
};

export default CartTotal;
