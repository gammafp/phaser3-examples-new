import { isEmpty } from "lodash";
import { useSelector } from "react-redux";
import { Link, useLoaderData } from "react-router-dom";
import { isAFile } from "../helpers/isAFile";
import { getFolders, TFolders } from "../state/selector/getFolders";
import { AppState } from "../state/store";

export const MainPage = () => {

    // Get parameters from url
    const loaderData = useLoaderData() as { version: string, folder: string };
    
    const folderStore = useSelector<AppState>(store => store.folders) as TFolders;
    const folderToFind = useSelector<AppState>((store) => store.folderRoute) as string;
    const folders = getFolders(folderStore, folderToFind);

    return (
        <>
            {
                (!isEmpty(folders)) ?
                    folders.children.map((folder, index) => {
                        return (
                            <div key={index +folder.path}>
                                <Link to={
                                    isAFile(folder.path) ?
                                        `../is-a-file` :
                                        `/${loaderData.version}/${folder.path}`
                                }>
                                    {folder.name} - {folder.path}
                                </Link>
                            </div>
                        )
                    }) : <div>File or route not found</div>
            }
        </>
    );
}