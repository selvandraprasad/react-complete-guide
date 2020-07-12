import React from 'react';

import burgerClasses from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props) => {
    let transformedIngredient = Object.keys(props.ingredients)
            .map( igKey => {
                return [...Array(props.ingredients[igKey])].map((_, i) => {
                    return <BurgerIngredient key={igKey + i} type={igKey} />;
                });
            })
            .reduce((arr, el) => {
                return arr.concat(el)
            },[]);

    if(transformedIngredient.length === 0) {
        transformedIngredient = <p> Please add ingredients! </p>
    }
    return(
        <div className={burgerClasses.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredient}
            <BurgerIngredient type="bread-bottom" />
        </div>

    );
}

export default burger;
