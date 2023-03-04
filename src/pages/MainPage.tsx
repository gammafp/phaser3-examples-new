import { isEmpty } from "lodash";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getFolders, TFolders } from "../state/selector/getFolders";
import { AppState } from "../state/store";

export const MainPage = () => {

    const folderStore = useSelector<AppState>(store => store.folders) as TFolders;
    const folders = getFolders(folderStore, "");

    return (
        <>
            {
                (!isEmpty(folders)) &&
                folders.children.map((folder, index) => {
                    return (
                        <div key={index}>
                            <a href={`${folder.path}`}>
                                {folder.name} - {folder.path}
                            </a>
                        </div>
                    )
                })
            }
        </>
    );
}