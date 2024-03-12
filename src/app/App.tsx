import { useState } from 'react'
// import './App.css'
import Meals from '../features/meals/Meals';
import Cart from '../features/cart/Cart';
import { fetchMeals, toggleMeal, MealState } from '../features/meals/mealsSlice'
import { useAppDispatch, useAppSelector } from './hooks'


function App() {


  return (
    <>
    <div>
      <h1>Speisekarte</h1>
      <Meals />
      <Cart />
    </div>
    </>
  )
}

export default App
