import { PayloadAction, createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export interface MealState {
    id: string,
    name: string,
    thumbnailURL: string,
    isFavorited: boolean,
    nCart: number, 
    price: number
}

export const mealsSlice = createSlice({
    name: 'meals',
    initialState: [] as MealState[],
    reducers: {
        toggleMeal: (state, action: PayloadAction<MealState>) => {
            return state.map(meal => {
                if (meal.id !== action.payload.id){
                    return meal
                }
                return {
                    ...meal,
                    isFavorited: !meal.isFavorited
                }
            })
        }
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchMeals.fulfilled, (state, action) => {
        let result : MealState[] = []
          action.payload.map(meal => {
            result.push(
                        {
                            id: meal.idMeal, 
                            name: meal.strMeal, 
                            thumbnailURL: meal.strMealThumb, 
                            isFavorited: false,
                            nCart: 0, 
                            price: 9.99
                        }
                )
            })
            return result
      })
      
    }
})

export const { toggleMeal } = mealsSlice.actions;

export const selectMeals = (state : RootState) => state.meals;
export const selectFavorites =  createSelector([selectMeals], meals => meals.filter((meal) => meal.isFavorited))

export const fetchMeals = createAsyncThunk('meals/fetchMeals', async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta');
    const data = await response.json();
    return data.meals
})

export default mealsSlice.reducer;