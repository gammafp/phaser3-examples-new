import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { setVersion } from "../state/reducers/frameworkVersion";
import { setFolderRoute } from "../state/reducers/folderRoute";
import { storeAppDispatch } from "../state/store";

// Helps to get the version and folder from url and redirect to the last version if the version is not specified from url
export const mainLoader = (loaderArgs: LoaderFunctionArgs) => {
    if(loaderArgs.params.version === undefined) {
        // Get last version
        const version = "3.61";
        storeAppDispatch(setVersion(version));
        storeAppDispatch(setFolderRoute(""));
        return redirect(`/${version}`);
    } else {
        // Set version in store
        storeAppDispatch(setVersion(loaderArgs.params.version));
        const folder = loaderArgs.params.folder === undefined ? "" : loaderArgs.params.folder;
        const file = loaderArgs.params["*"] === undefined ? "" : loaderArgs.params["*"];
        storeAppDispatch(setFolderRoute(`${folder}/${file}`));
        return {
            version: loaderArgs.params.version,
            folder: `${folder}/${file}`,
        };
    }
}