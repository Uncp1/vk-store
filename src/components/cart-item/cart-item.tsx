import { Headline, IconButton, Text } from '@vkontakte/vkui';
import { FC } from 'react';
import styles from './cart-item.module.css';
import shrekImage from '../../assets/shrek.jpg';
import { useAppDispatch } from '../../services/hooks/hooks';
import {
  decreaseItemAmount,
  increaseItemAmount,
  removeCartItem,
} from '../../services/slices/cart-slice';
import {
  Icon28AddSquareOutline,
  Icon28Delete,
  Icon28MinusSquareOutline,
  Icon36Delete,
} from '@vkontakte/icons';

interface CartItemProps {
  title: string;
  price: number;
  image: string;
  amount: number;
  index: number;
}

const CartItem: FC<CartItemProps> = ({
  title = 'Shrek',
  price = 3400,
  image = shrekImage,
  amount = 1,
  index,
}) => {
  const dispatch = useAppDispatch();

  const handleRemoveItem = () => {
    dispatch(removeCartItem(index));
  };

  const handleIncreaseItemAmount = () => {
    dispatch(increaseItemAmount(index));
  };

  const handleDecreaseItemAmount = () => {
    dispatch(decreaseItemAmount(index));
  };
  return (
    <section className={styles.item}>
      <img src={image} alt={title} className={styles.item__image} />

      <div className={styles.item__card}>
        <div className={styles.item__details}>
          <Headline level="1">{price}</Headline>

          <Text className={styles.item__title}>{title}</Text>
        </div>

        <div className={styles.item__actions}>
          <div className={styles.item__amount}>
            <IconButton onClick={handleDecreaseItemAmount}>
              <Icon28MinusSquareOutline />
            </IconButton>

            <Text>{amount}</Text>

            <IconButton onClick={handleIncreaseItemAmount}>
              <Icon28AddSquareOutline></Icon28AddSquareOutline>
            </IconButton>
          </div>

          <IconButton onClick={handleRemoveItem}>
            <Icon28Delete />
          </IconButton>
        </div>
      </div>
    </section>
  );
};

export default CartItem;
