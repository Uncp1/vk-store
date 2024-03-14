import { Headline, IconButton, Text } from '@vkontakte/vkui';
import { FC } from 'react';
import styles from './cart-item.module.css';
import shrekImage from '../../assets/shrek.jpg';
import { useAppDispatch } from '../../services/hooks/hooks';
import { removeCartItem } from '../../services/slices/cart-slice';
import { Icon36Delete } from '@vkontakte/icons';

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
    console.log('removing item', index);
    dispatch(removeCartItem(index));
  };

  return (
    <section className={styles.item}>
      <img src={image} alt={title} className={styles.item__image} />

      <div className={styles.item__card}>
        <div className={styles.item__details}>
          <Headline level="1">{price}</Headline>

          <Text className={styles.title}>{title}</Text>
        </div>

        <div className={styles.item__actions}>
          <Text>{amount}</Text>

          <IconButton onClick={handleRemoveItem}>
            <Icon36Delete />
          </IconButton>
        </div>
      </div>
    </section>
  );
};

export default CartItem;
