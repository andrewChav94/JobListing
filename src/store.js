import { configureStore } from "@reduxjs/toolkit";
import tagsReducer from './features/tagsSlice';
import jobsReducer from './features/jobsSlice';

export default configureStore({
    reducer: {
        tags: tagsReducer,
        jobs: jobsReducer
    },
})