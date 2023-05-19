import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../utils/constants';
import axios from 'axios';

const initialState = {
    users: [],
    currentUser: {},
    isLoading: false,
}

export const getUsers = createAsyncThunk(
    'user/users',
    async (_, { rejectWithValue, dispatch }) => {
        const res = await axios.get(`${BASE_URL}/users`)
        return res.data;
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
        },
    }, extraReducers: (builder) => {
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.users = action.payload;
            state.isLoading = false;
        }).addCase(getUsers.pending, (state) => {
            state.isLoading = true;
        }).addCase(getUsers.rejected, (state) => {
            state.isLoading = false;
            alert('Ошибка запроса')
        })
    }
});

export const { setUsers, setCurrentUser } = userSlice.actions

export default userSlice.reducer;