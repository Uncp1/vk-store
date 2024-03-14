import {} from '@vkontakte/vkui';
import { FC } from 'react';
import styles from './cart-total.module.css';
import { useAppSelector } from '../../services/hooks/hooks';

const CartTotal: FC = () => {
  const { cart } = useAppSelector((state) => state.cart);

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <>
      <p>{total}</p>
    </>
  );
};

export default CartTotal;
