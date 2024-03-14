import { Headline, Text } from '@vkontakte/vkui';
import { FC } from 'react';
import styles from './cart-item.module.css';
import shrekImage from '../../assets/shrek.jpg';

interface CartItemProps {
  title?: string;
  price?: number;
  image?: string;
}

const CartItem: FC<CartItemProps> = ({
  title = 'Shrek',
  price = 10000,
  image = shrekImage,
}) => {
  return (
    <section className={styles.item}>
      <img src={image} alt={title} className={styles.item__image} />

      <div className={styles.item__card}>
        <div className={styles.item__details}>
          <Headline level="1">{price}</Headline>

          <Text>{title}</Text>
        </div>

        <div className={styles.item__actions}>
          <Text>1</Text>

          <Text>bin</Text>
        </div>
      </div>
    </section>
  );
};

export default CartItem;
