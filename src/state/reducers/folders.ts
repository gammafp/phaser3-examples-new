import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: any = {};
const folders = createSlice({
    name: 'folders',
    initialState,
    reducers: {
        setFolders: (state, action: PayloadAction<any>) => {
            const folders = JSON.parse(JSON.stringify(action.payload).replace(/\\\\/g, "/"));
            return folders;
        }
    }
});

export const { setFolders } = folders.actions;
export default folders.reducer;
