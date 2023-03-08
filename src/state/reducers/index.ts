import { combineReducers } from 'redux';

import folders from "./folders";
import frameworkVersion from "./frameworkVersion";
import folderRoute from "./folderRoute";

export const rootReducer = combineReducers({
    folders,
    frameworkVersion,
    folderRoute
});
