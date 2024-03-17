import { Spinner } from '@vkontakte/vkui';
import { FC, useEffect, useState } from 'react';
import styles from './cart.module.css';
import CartList from '../cart-list/cart-list';
import CartTotal from '../cart-total/cart-total';
import { useAppDispatch } from '../../services/hooks/hooks';
import { fetchFakeCart } from '../../services/slices/cart-slice';

const Cart: FC = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchFakeCart()).finally(() => {
      setIsLoading(false);
    });
  }, [dispatch]);

  return (
    <section className={styles.cart}>
      {isLoading ? (
        <Spinner className={styles.spinner} size="large" />
      ) : (
        <>
          <CartList />
          <CartTotal />
        </>
      )}
    </section>
  );
};

export default Cart;
