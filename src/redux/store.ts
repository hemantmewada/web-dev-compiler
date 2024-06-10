import { configureStore } from "@reduxjs/toolkit";
import compilerSlice from './slices/compilerSlices';

export const store = configureStore({
    reducer: {
        compilerSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>;