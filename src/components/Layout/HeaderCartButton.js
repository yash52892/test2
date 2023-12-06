import { useContext } from 'react';
import React from "react";  
import classes from './HeaderCartButton.module.css';
import CartIcon from "../Cart/CartIcon";
import CartContext from '../../store/cart-context';


const HeaderCartButton=(props)=>{
    const cartCtx = useContext(CartContext);
    let a=cartCtx.items.length
    console.log(a)
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.quantity;
  }, 0);

    return(
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
            <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}
export default HeaderCartButton;