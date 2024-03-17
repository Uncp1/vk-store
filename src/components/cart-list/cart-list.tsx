import {
  Button,
  Div,
  Headline,
  List,
  Separator,
  Spacing,
} from '@vkontakte/vkui';
import { FC, Fragment } from 'react';
import styles from './cart-list.module.css';
import CartItem from '../cart-item/cart-item';
import { useAppSelector } from '../../services/hooks/hooks';

const CartList: FC = () => {
  const { cart } = useAppSelector((state) => state.cart);

  const handleGoHome = () => {
    // redirect to home page
    console.log('homepage');
  };

  return (
    <List className={styles.list}>
      {cart.length > 0 ? (
        cart.map((item, index) => (
          <Fragment key={index}>
            <CartItem
              title={item.title}
              price={item.price}
              image={item.image}
              description={item.description}
              index={index}
              amount={item.amount}
            />
            {index < cart.length - 1 && (
              <Spacing size={24}>
                <Separator wide={false} />
              </Spacing>
            )}
          </Fragment>
        ))
      ) : (
        <Div className={styles.cart_empty}>
          <Headline className={styles.item__text} level="1">
            Ваша корзина пуста
          </Headline>

          <p>Чтобы найти товары, загляните в каталог</p>

          <Button onClick={handleGoHome} mode="secondary" size="l">
            На главную
          </Button>
        </Div>
      )}
    </List>
  );
};

export default CartList;
