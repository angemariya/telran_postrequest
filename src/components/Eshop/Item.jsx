import { useContext } from 'react'
import classes from './item.module.css'
import { ApiContext } from '../../context'

export const Item = ({ title, price, image, description, id }) => {
  const {handleDeleteItem} = useContext(ApiContext);

  return (
    <div className={classes.item}>
      <h1>{title}</h1>
      <img className={classes.image} src={image} alt={title} />
      <p className={classes.description}>{description}</p>
      <span>{price}$</span>
      <button onClick={()=>handleDeleteItem(id)}>Delete</button>
    </div>
  )
}
