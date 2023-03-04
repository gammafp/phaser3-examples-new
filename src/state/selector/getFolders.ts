import { createSelector } from "@reduxjs/toolkit";
import { isEmpty } from "lodash";

export type TFolders = {
    path: string;
    name: string;
    birthtimeMs?: number;
    children: TFolders[];
}
// Selector to get folder: More about selectors: https://github.com/reduxjs/reselect
export const getFolders = (stateFolder: TFolders, route: string) => {
    return createSelector((stateFolder: TFolders) => stateFolder, (stateFolder: TFolders) => {
        const folders = stateFolder;
        const routeArray = route.replace(/(.\/src|\/src|src|\.\/)\/?/, "")
            .split("/")
            .filter((routeFilter) => !isEmpty(routeFilter));
        console.log("routeArray", routeArray)

        let actualFolder: TFolders | undefined = folders;
        if (isEmpty(routeArray[0]) || (routeArray[0] === "." && routeArray.length === 1) || (routeArray[0] === "./" && routeArray.length === 1)) {
            return actualFolder;
        } else {
            routeArray.forEach((folderName, i) => {
                if (actualFolder && folderName !== undefined) {
                    if (actualFolder.children !== undefined) {
                        // If the first folder is src, we need down to the next level
                        if (i === 0 && folderName === "src") {
                            return;
                        } else {
                            const folderFinder = actualFolder.children.find((folder) => folder.name === folderName);
                            actualFolder = folderFinder
                        }
                        
                    }
                }
            });
        }

        return actualFolder;
    })(stateFolder);
}
