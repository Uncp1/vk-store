import {} from '@vkontakte/vkui';
import { FC } from 'react';
import styles from './cart.module.css';
import CartList from '../cart-list/cart-list';
import CartTotal from '../cart-total/cart-total';
import { useAppSelector } from '../../services/hooks/hooks';

const Cart: FC = () => {
  return (
    <div className={styles.cart}>
      <CartList />
      <CartTotal />
    </div>
  );
};

export default Cart;
