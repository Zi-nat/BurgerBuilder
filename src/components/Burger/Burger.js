import React from 'react';

import classes from './Burger.css';
import BurgerIngredients from './Ingredients/Ingredients';

const burger = (props) =>{   
      let transformedIngredient = Object.keys(props.ingredient)
        .map (igKey => {
            return [...Array( props.ingredient[igKey] )].map( ( _, i ) => {
                return <BurgerIngredients key={igKey + i} type={igKey} />;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

        if (transformedIngredient.length === 0) {
            transformedIngredient = <p>Please start adding ingredients!</p>;}
  return (
            
            <div className={classes.Burger}>
              <BurgerIngredients type= "bread-top"/>
              {transformedIngredient}
              <BurgerIngredients type= "bread-bottom"></BurgerIngredients>
            </div>
            
    );
    
};



export default burger;
