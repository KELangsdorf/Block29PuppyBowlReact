import { configureStore } from '@reduxjs/toolkit'
import searchTermReducer from '../slice/searchTermSlice';

{/*
reducer is the object that specifies a reducer with the key of `searchTerm`
and the corresponding function `searchTermReducer`.

Overall, this sets up a Redux store with a single reducer 
(searchTermReducer) to manage the state related to a search term. 

*/}

export const store = configureStore({
    reducer: {
        searchTerm: searchTermReducer,
      },
})