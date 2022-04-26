import { configureStore } from '@reduxjs/toolkit';
import { exerciseApi } from '../services/exerciseAPI';

export default configureStore({
    reducer: {
        [exerciseApi.reducerPath]: exerciseApi.reducer,
    },
});