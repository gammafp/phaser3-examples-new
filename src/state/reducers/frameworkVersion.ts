import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: string = "0.0.0";
const frameworkVersion = createSlice({
    name: 'framework-version',
    initialState,
    reducers: {
        setVersion: (state, action: PayloadAction<string>) => {
            return action.payload;
        }
    }
});

export const { setVersion } = frameworkVersion.actions;
export default frameworkVersion.reducer;
