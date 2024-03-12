import React, { useEffect } from 'react'
import { useAppDispatch } from '../app/hooks'
import { toggleMeal, MealState } from '../features/meals/mealsSlice'
import { addToCart, removeFromCart, removeAllFromCart } from '../features/cart/cartSlice';

const MealCard = (props : MealState ) => {
    const dispatch = useAppDispatch()

    const ButtonsOutsideCart = () => (
        <>
            <button onClick={() => dispatch(toggleMeal(props))}>{props.isFavorited ? 'Unfavorite Me' : 'Favorite Me'}</button>
            <button onClick={() => dispatch(addToCart(props))}>Add to Cart</button>
        </>
    )

    const ButtonsInsideCart = () => (
        <>
        <div>
        <p># in Cart: {props.nCart}</p>
         <button onClick={() => dispatch(addToCart(props))}>+</button>
         <button onClick={() => dispatch(removeFromCart(props))}>-</button>

        </div>
        
         <button onClick={() => dispatch(removeAllFromCart(props))}>Remove from Cart</button>

        </>
    )

    return (
        <>
        <div style={{padding: 5, display: 'flex', gap: 4, alignItems: 'center'}}>
            <img src={props.thumbnailURL} style={{aspectRatio: 1, height: 50, width: 50, paddingRight: 5}} />
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
                <div style={{display: 'flex', gap: 2}}>
                    <p>{props.name}</p>
                    {props.isFavorited && <p>&#x2661;</p>}
                </div>
                <div style={{display: 'flex', gap: 4, alignItems: 'baseline'}}>
                    {props.nCart > 0 ? <ButtonsInsideCart /> : <ButtonsOutsideCart />}
                </div>
            </div>
            <div>{props.nCart > 0 ? props.price * props.nCart : props.price}€</div>
        </div>
        </>
    )
}

export default MealCard;
    