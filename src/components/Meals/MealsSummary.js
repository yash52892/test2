import { Fragment, useContext, useState } from "react";
import classes from "./MealsSummary.module.css"
import ListContext from "../../store/itemContext";

const MealsSummary = () => {
  let list=useContext(ListContext);
  let[obj, setObj]=useState({})
  const submitHandler=(e)=>{
    e.preventDefault();
     setObj(
      obj={
        id : Math.random(),
        name : e.target[0].value,
        description: e.target[1].value,
        price:e.target[2].value,
        quantity: e.target[3].value,
      }
     )
     list.addItemToList(obj);
  }
  return (
    <Fragment>
      <div className={classes.Summery}>
        <form onSubmit={submitHandler}>
          <label>Name</label>
          <input type="text"></input>
          <label>Description</label>
          <input type="text"></input>
          <label>Price</label>
          <input type="number"></input>
          <label>quantity</label>
          <input type="number"></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </Fragment>
  );
};
export default MealsSummary;
