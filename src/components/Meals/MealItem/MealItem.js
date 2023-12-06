import classes from './MealItem.module.css';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import ListContext from '../../../store/itemContext';

const MealItem = (props) => {
  
  const cartCtx = useContext(CartContext);
  const list=useContext(ListContext);

  const price = props.price;

  // const addToCartHandler = (amount) => {
  //   list.addItem({
  //     key: props.id,
  //     id: props.id,
  //     name: props.name,
  //     amount: amount,
  //     price: props.price,
  //     sizeL: props.sizeL,
  //     sizeM: props.sizeM,
  //     sizeS: props.sizeS,
  //   });
  // };
  const quantityhandler=()=>{
    cartCtx.addItem(props);
    list.sizeLquantity(props);
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>Price: {price}</div>
      </div>
      <div>
      <div>
      {props.quantity?<button className={classes.button} onClick={quantityhandler}>Quantity:{props.quantity}</button>:<span>Out of Stock</span>}
      </div>   
      </div>
    </li> 
  );
};

export default MealItem;