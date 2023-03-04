import { combineReducers } from 'redux';

import folders from "./folders";
import phaserVersion from "./phaserVersion";

export const rootReducer = combineReducers({
    folders,
    phaserVersion
});
