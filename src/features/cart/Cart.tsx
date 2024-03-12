import React, { useState } from "react";
import MealCard from "../../components/MealCard";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

const Cart = () => {
    const meals = useAppSelector((state) => state.cart);

    let sum : number = 0;
    meals.map(meal =>
        {
            sum += meal.price * meal.nCart
        })

    return (
        <>
        <h2>Warenkorb</h2>
        {meals.length === 0 ? <p>Leer.</p> : meals.map((meal)=>(
            <MealCard key={`cart_${meal.id}`}{...meal}/>
        ))}
        {sum !== 0 && 
        <div>
            <h3>Summe:</h3>
            <p>{sum}€</p>
            <button onClick={() => alert('Weiterleitung zum Bezahlvorgang...')}>Zum Bezahlvorgang</button>
        </div>

        }

        </>
    )
}

export default Cart;