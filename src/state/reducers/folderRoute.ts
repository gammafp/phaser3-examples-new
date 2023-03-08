import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: string = "";
const folderRoute = createSlice({
    name: 'folderRoute',
    initialState,
    reducers: {
        setFolderRoute: (state, action: PayloadAction<any>) => {
            return action.payload;
        }
    }
});

export const { setFolderRoute } = folderRoute.actions;
export default folderRoute.reducer;
