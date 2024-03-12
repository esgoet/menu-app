import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MealState } from "../meals/mealsSlice";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [] as MealState[],
    reducers: {
        addToCart: (state, action: PayloadAction<MealState>) => {
            if (state.find((meal) => meal.id === action.payload.id) != undefined) {
                return state.map(meal => {
                    if (meal.id !== action.payload.id){
                        return meal
                    }
                    return {
                        ...meal,
                        nCart: meal.nCart + 1
                    }
                })
            }
            
            const meal = {...action.payload, nCart: action.payload.nCart +1 }
            return [...state, meal]
        },
        removeFromCart: (state, action: PayloadAction<MealState>) => {
            const meal = state.find((meal) => meal.id === action.payload.id)
            if (meal != undefined && meal.nCart >=2) {
                return state.map(meal => {
                    if (meal.id !== action.payload.id){
                        return meal
                    }
    
                    return {
                            ...meal,
                            nCart: meal.nCart - 1
                        }
                   
                })
            }
            return state.filter(meal => meal.id !== action.payload.id)
          
            
        },
        removeAllFromCart: (state, action: PayloadAction<MealState>) => {
            return state.filter(meal => meal.id !== action.payload.id)
        }
    }
})

export const { addToCart, removeFromCart, removeAllFromCart } = cartSlice.actions;
export default cartSlice.reducer;