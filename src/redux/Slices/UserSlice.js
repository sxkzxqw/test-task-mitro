import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../utils/constants';
import axios from 'axios';

const initialState = {
    users: [],
    currentUser: {},
    isLoading: true,
    user: {},
}

export const getUsers = createAsyncThunk(
    'user/users',
    async (_, { rejectWithValue, dispatch }) => {
        const res = await axios.get(`${BASE_URL}/users`)
        return res.data;
    }
)

export const getUser = createAsyncThunk(
    'user/getUser',
    async (user, { rejectWithValue, dispatch }) => {
        const res = await axios.get(`${BASE_URL}/users/${user}`)
        return res.data;
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
    }, extraReducers: (builder) => {
        builder
            .addCase(getUsers.fulfilled, (state, action) => {
                state.currentUser = action.payload[0]
                state.users = action.payload;
                state.isLoading = false;
            }).addCase(getUsers.pending, (state) => {
                state.isLoading = true;
            }).addCase(getUsers.rejected, (state) => {
                state.isLoading = false;
                alert('Ошибка запроса')
            }).addCase(getUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoading = false;
            }).addCase(getUser.pending, (state) => {
                state.isLoading = true;
            }).addCase(getUser.rejected, (state) => {
                state.isLoading = false;
                alert('Ошибка запроса')
            })
    }
});

export const { setUser } = userSlice.actions

export default userSlice.reducer;