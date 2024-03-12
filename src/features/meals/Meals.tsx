import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { fetchMeals, toggleMeal, MealState, selectFavorites, selectMeals } from './mealsSlice'
import MealCard from '../../components/MealCard';

const Meals = () => {
    const meals : MealState[] = useAppSelector(selectMeals);
    // const favoriteMeals : MealState[] = useAppSelector(selectFavorites);
    const dispatch = useAppDispatch()

    useEffect(()=>{
        if (meals.length === 0 ) dispatch(fetchMeals())
    }, [])

    const Favorites = () => (
        <>
            <h3>Favoriten</h3>
            {meals.filter(meal => meal.isFavorited).map(meal => 
            (
                <MealCard key={`favorited_${meal.id}`} {...meal}/> 
                )
            
                
            )}
        </>
    )

    return (
        <>
        <h2>Speisen</h2>
        {meals.filter(meal => meal.isFavorited).length !== 0 && <Favorites />}
        <h3>Pasta</h3>
        {meals.length !== 0 ? 
        meals.map((meal)=> ( 
            <MealCard key={meal.id} {...meal}/>
            )) 
        : <p>Loading...</p>
        }
        
        </>
    )

}

export default Meals;