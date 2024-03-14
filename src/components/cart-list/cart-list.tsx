import { List, Spinner } from '@vkontakte/vkui';
import { FC, useEffect } from 'react';
import styles from './cart-list.module.css';
import CartItem from '../cart-item/cart-item';
import { useAppDispatch, useAppSelector } from '../../services/hooks/hooks';
import { fetchFakeCart } from '../../services/slices/cart-slice';

const CartList: FC = () => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchFakeCart());
  }, [dispatch]);

  return (
    <List className={styles.list}>
      {cart.length > 0 ? (
        cart.map((item, index) => (
          <CartItem
            title={item.title}
            price={item.price}
            image={item.image}
            key={index}
            index={index}
            amount={1}
          />
        ))
      ) : (
        <Spinner size="medium" style={{ margin: '20px 0' }} />
      )}
    </List>
  );
};

export default CartList;
