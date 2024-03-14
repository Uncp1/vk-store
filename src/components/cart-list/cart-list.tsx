import { List } from '@vkontakte/vkui';
import { FC, useEffect, useState } from 'react';
import styles from './cart-list.module.css';
import { getItems } from '../../services/api/api';
import CartItem from '../cart-item/cart-item';

const CartList: FC = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const fetchedItems = await getItems();
      fetchedItems.forEach((item: []) => {
        console.log(item);
      });
      setItems(fetchedItems);
    };

    fetchItems();
  }, []);

  return (
    <List className={styles.list}>
      {items.length > 0 ? (
        items.map((item, index) => (
          <CartItem
            title={item.title}
            price={item.price}
            image={item.image}
            key={index}
          >
            {/* Render your item here */}
          </CartItem>
        ))
      ) : (
        <p>Loading items...</p>
      )}
      <CartItem />
    </List>
  );
};

export default CartList;
