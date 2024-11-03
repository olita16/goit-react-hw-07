import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	name: "",
 };

const slice = createSlice({
	name: 'filters',
	initialState: initialState,
	reducers: {
		changeFilter: (state, action) => {
			state.name = action.payload;
		},
	},
}); 

export const selectFilters = (state) => state.filters.name; 

export const filterReducer = slice.reducer;

export const { changeFilter } = slice.actions;