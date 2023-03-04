import { combineReducers } from 'redux';

import folders from "./folders";
import frameworkVersion from "./frameworkVersion";

export const rootReducer = combineReducers({
    folders,
    frameworkVersion
});
