
{/* Imports from the redux toolkit library */}
import { createSlice } from '@reduxjs/toolkit';


{/* name: specifies the name of the slice, 
and is used to generate action type strings

initialState: specifies the initial state value

reducers: specifies an object where the keys are action names
and the values are reducer fuunctions. Reducer functions receive
the current state and the action payload as parameters.
*/}

  {/* under the 'reducer' OBJECT there is one function defined:
      'setSearchTerm, it takes in State and Action
      then it's returning the PAYLOAD so it updates the state to
      a new search value
*/}
export const searchTermSlice = createSlice({
  name: 'searchTerm',
  initialState: '',
  reducers: {
    setSearchTerm: (state, action) => {
      console.log("State", state)
      console.log("Action", action)
      return action.payload
    }
  },
});

{/* this exports the function of setSearchTerm created by createSlice
    and dispatcs the 'setSearchTerm' action with a payload
*/}

export const { setSearchTerm } = searchTermSlice.actions;

{/* the default export of the module is the reducer function created by createSlice. This 
    reducer function will be combined with other reducers to create the root reducer for 
    your Redux store.
*/}

export default searchTermSlice.reducer;