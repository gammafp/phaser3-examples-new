import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: any = [];

const folders = createSlice({
    name: 'folders',
    initialState,
    reducers: {
        setFolders: (state, action: PayloadAction<any>) => {
            return action.payload;
        }
    }
});

export const { setFolders } = folders.actions;
export default folders.reducer;
