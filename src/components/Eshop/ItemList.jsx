import React, { useContext } from 'react';
import { Item } from './Item';
import { ApiContext } from '../../context';
import classes from './itemList.module.css';

export const ItemList = () => {
  const { items } = useContext(ApiContext);

  return (
    <div>
      <div className={classes.productList}>
        {items.map((product) => (
          <Item
            id={product.id}
            key={product.id}
            image={product.images[0]}
            description={product.description}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};
