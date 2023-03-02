import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: any = [];

const folders = createSlice({
    name: 'folders',
    initialState,
    reducers: {
        setFolders: (state, action: PayloadAction<any>) => {
            return action.payload;
        },
        getFolder: (state, action: PayloadAction<any>) => {
            // TODO: Implement this
        }
    }
});

export const { setFolders } = folders.actions;
export default folders.reducer;
