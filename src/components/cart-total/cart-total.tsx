import { Button, Headline, Text } from '@vkontakte/vkui';
import { FC } from 'react';
import styles from './cart-total.module.css';
import { useAppSelector } from '../../services/hooks/hooks';

const CartTotal: FC = () => {
  const { cart } = useAppSelector((state) => state.cart);

  let totalPrice = 0;
  let totalAmount = 0;
  cart.forEach((item) => {
    totalPrice += item.price * item.amount;
    totalAmount += item.amount;
  });

  const totalPriceDecimalFix = parseFloat(totalPrice.toFixed(2));
  const itemWord =
    totalAmount === 1 ? 'товар' : totalAmount < 5 ? 'товара' : 'товаров';

  const handleCheckout = () => {
    // redirect to checkout page
    console.log('Checkout', cart);
  };

  return (
    <section className={styles.cart__checkout}>
      {cart.length > 0 && (
        <>
          <div className={styles.cart__total}>
            <Text>
              {' '}
              Итого {totalAmount} {itemWord}:
            </Text>

            <Headline Component={'h2'} weight="1" level="1">
              {totalPriceDecimalFix} &#8381;
            </Headline>
          </div>

          <Button onClick={handleCheckout} className={styles.cart__button}>
            Перейти к оформлению
          </Button>
        </>
      )}
      {cart.length === 0 && (
        <div className={styles.cart__total}>
          <Headline Component={'h2'} weight="1" level="1">
            Ваша корзина пуста
          </Headline>
        </div>
      )}
    </section>
  );
};

export default CartTotal;
