import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { Provider } from "react-redux";
import "./index.scss";
import store from "./state/store";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
        /* errorElement: <ErrorPage />, */
        children: [
            /* { index: true, element: <Index /> } */
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
