import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../utils/constants';
import axios from 'axios';


const initialState = {
    posts: [],
    currentPostInfo: {},
    currentPostComments: [],
    isLoading: false,
}

export const getPosts = createAsyncThunk(
    'post/posts',
    async (_, { rejectWithValue, dispatch }) => {
        const res = await axios.get(`${BASE_URL}/posts`)
        return res.data;
    }
)

export const getCurrentPost = createAsyncThunk(
    'post/currentPost',
    async (currentPost, { rejectWithValue, dispatch }) => {
        const res = await axios.get(`${BASE_URL}/posts/${currentPost}`)
        return res.data;
    }
)

export const getCurrentPostComments = createAsyncThunk(
    'post/currentPost/comments',
    async (currentPost, { rejectWithValue, dispatch }) => {
        const res = await axios.get(`${BASE_URL}/posts/${currentPost}/comments`)
        return res.data;
    }
)

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setCurrentPost: (state, action) => {
            state.currentPostInfo = action.payload
        },
    }, extraReducers: (builder) => {
        builder
            .addCase(getPosts.fulfilled, (state, action) => {
                state.posts = action.payload.sort(() => Math.random() - 0.5);
                state.isLoading = false;
            }).addCase(getPosts.pending, (state) => {
                state.isLoading = true;
            }).addCase(getPosts.rejected, (state) => {
                state.isLoading = false;
                alert('Ошибка запроса')
            })
            .addCase(getCurrentPost.fulfilled, (state, action) => {
                state.currentPostInfo = action.payload
                state.isLoading = false;
            }).addCase(getCurrentPost.pending, (state) => {
                state.currentPostInfo = {}
                state.currentPostComments = []
                state.isLoading = true;
            }).addCase(getCurrentPost.rejected, (state) => {
                state.isLoading = false;
                alert('Ошибка запроса')
            })
            .addCase(getCurrentPostComments.fulfilled, (state, action) => {
                state.currentPostComments = action.payload
                state.isLoading = false;
            }).addCase(getCurrentPostComments.pending, (state) => {
                state.currentPostComments = []
                state.isLoading = true;
            }).addCase(getCurrentPostComments.rejected, (state) => {
                state.isLoading = false;
                alert('Ошибка запроса')
            })
    }
});

export const { setCurrentPost } = postSlice.actions

export default postSlice.reducer;