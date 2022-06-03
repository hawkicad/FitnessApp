import { configureStore } from '@reduxjs/toolkit';
import { exerciseApi } from '../services/exerciseAPI';
import { quoteApi } from '../services/quoteAPI';

export default configureStore({
    reducer: {
        [exerciseApi.reducerPath]: exerciseApi.reducer,
        [quoteApi.reducerPath]: quoteApi.reducer,
    },
});