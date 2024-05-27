import React from "react";
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../slice/searchTermSlice';

{/*
const dispatch = useDispatch();: 
This line is using the useDispatch hook from Redux to get access to the
dispatch function, which is used to dispatch actions to the Redux store.

const handleChange = (e) => { dispatch(setSearchTerm(e.target.value)); };: 
This is a function called handleChange that takes an event (e) as its 
parameter. Inside this function, it dispatches an action to the Redux 
store using the dispatch function. The action being dispatched is 
setSearchTerm, and it passes the value of the input field 
(e.target.value) as its payload. This is updating the state in 
the Redux store with the search term.

*/}


const SearchBar = () => {
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(setSearchTerm(e.target.value));
    };

    return (
        <div className="p-3 mb-2 bg-info text-black">
            <h3>Search a Player:</h3>
            <input
                type="search"
                placeholder="Search field"
                onChange={handleChange}
                className="block w-full py-2 px-3 border border-solid border-black rounded-md bg-white text-black placeholder-black focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
            />
        </div>
    );
};

export default SearchBar;
