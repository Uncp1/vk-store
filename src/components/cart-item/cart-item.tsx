import { Headline, IconButton, Text } from '@vkontakte/vkui';
import { FC } from 'react';
import styles from './cart-item.module.css';
import shrekImage from '../../assets/shrek.jpg';
import { useAppDispatch, useAppSelector } from '../../services/hooks/hooks';
import {
  decreaseItemAmount,
  increaseItemAmount,
  removeCartItem,
} from '../../services/slices/cart-slice';
import {
  Icon28AddSquareOutline,
  Icon28DeleteOutline,
  Icon28MinusSquareOutline,
} from '@vkontakte/icons';
import { selectCartItemByIndex } from '../../utils/selectors';
import { truncateString } from '../../utils/helpers';

export interface CartItemProps {
  title: string;
  price: number;
  image: string;
  amount: number;
  index: number;
  id?: number;
  category?: string;
  description: string;
  rating?: { rate: number; count: number };
}

const CartItem: FC<CartItemProps> = ({
  title = 'Shrek',
  price = 3400,
  image = shrekImage,
  amount = 1,
  description = 'Shrek is cool',
  index, // дефолтные значения для пропсов на случай, если в api бует ошибка
}) => {
  const dispatch = useAppDispatch();
  const item = useAppSelector((state) => selectCartItemByIndex(state, index));

  const handleRemoveItem = () => {
    dispatch(removeCartItem(index));
  };

  const handleIncreaseItemAmount = () => {
    dispatch(increaseItemAmount(index));
  };

  const handleDecreaseItemAmount = () => {
    dispatch(decreaseItemAmount(index));
  };

  const truncatedDescription = truncateString(description, 240);
  const truncatedTitle = truncateString(title, 80);
  return (
    <section className={styles.item}>
      <img src={image} alt={title} className={styles.item__image} />

      <div className={styles.item__card}>
        <div className={styles.item__details}>
          <Text className={styles.item__title}>{truncatedTitle}</Text>
          <Text className={styles.item__description}>
            {truncatedDescription}
          </Text>

          <IconButton
            aria-label="Удалить товар из корзины"
            onClick={handleRemoveItem}
          >
            <Icon28DeleteOutline />
          </IconButton>
        </div>

        <div className={styles.item__actions}>
          <Headline
            Component={'h3'}
            className={styles.item__text}
            level="1"
            weight="1"
          >
            {price} &#8381;
          </Headline>

          <div className={styles.item__amount}>
            <IconButton
              aria-label="Уменьшить количество товара"
              className={item.amount > 1 ? styles.item__button_enabled : ''}
              disabled={item.amount > 1 ? false : true}
              onClick={item.amount > 1 ? handleDecreaseItemAmount : () => {}}
            >
              <Icon28MinusSquareOutline />
            </IconButton>

            <Text>{amount}</Text>

            <IconButton
              aria-label="Увеличить количество товара"
              className={item.amount < 10 ? styles.item__button_enabled : ''}
              disabled={item.amount < 10 ? false : true}
              onClick={item.amount < 10 ? handleIncreaseItemAmount : () => {}}
            >
              <Icon28AddSquareOutline />
            </IconButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartItem;
