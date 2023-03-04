import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: string = "0.0.0";
const phaserVersion = createSlice({
    name: 'phaser-version',
    initialState,
    reducers: {
        setVersion: (state, action: PayloadAction<string>) => {
            return action.payload;
        }
    }
});

export const { setVersion } = phaserVersion.actions;
export default phaserVersion.reducer;
