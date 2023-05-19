import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Slices/UserSlice";
import PostSlice from "./Slices/PostSlice";

export const store = configureStore({
    reducer: {
        user: UserSlice,
        post: PostSlice,
    },
})