import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { MainPageLayout } from "../pages/MainPageLayout";
import { mainLoader } from "./main-loader";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPageLayout />,
        loader: mainLoader,
        errorElement: <div>xxxxxxxxxxxxxxxxxxxxxxxxxxx</div>,
        children: [
            {
                path: "/:version/",
                element: <MainPage />,
                loader: mainLoader,
            },
            {
                path: "/:version/:folder/*",
                element: <MainPage />,
                loader: mainLoader,
            }
        ]
    },
    
    {
        path: "/is-a-file",
        element: <div>Is a file</div>
    }

],
{
    basename: "/phaser-examples"
});