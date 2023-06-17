import { createSlice } from '@reduxjs/toolkit';

const avatarsSlice = createSlice({
	name: 'avatars',
	initialState: {
		value: []
	},
	reducers: {
		add: (state, action) => {
			state.value.push(action.payload)
		}
	}
})

export const { add } = avatarsSlice.actions

export default avatarsSlice.reducer
