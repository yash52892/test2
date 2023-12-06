import classes from './CartItem.module.css';

const CartItem = (props) => {
  const price = props.price;
  const st=props.quantity
  let x=Boolean(st)
console.log(props, st)
  return (
    <li key={props.id} id={props.id} className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>Price: {price}</span>
        </div>
      </div>
      <div>
        {x && <span className={classes.amount}>SizeL x {st}</span>}
        </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;