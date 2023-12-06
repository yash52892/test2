import classes from "./AvilableMeals.module.css";
import Card from "../UI/Card.js";
import MealItem from "./MealItem/MealItem";
import ListContext from "../../store/itemContext";
import { useContext } from "react";

const AvailableMeals =()=>{
    const list=useContext(ListContext);
    console.log(list.items);
    const mealList=list.items.map(meals=>
      <MealItem key={meals.id} id={meals.id} name={meals.name} description={meals.description} 
      price={meals.price} quantity={meals.quantity}/>
    )
    return(
      <section className={classes.meals}>
      <Card className={classes.mealList}>
      <ul>{mealList}</ul>
      </Card>
      </section>
    )
  }
  export default AvailableMeals;