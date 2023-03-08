import { useEffect } from "react";
import { Outlet, useLocation, useNavigate, useNavigationType, useParams } from "react-router-dom";

export const MainPageLayout = () => {

    const history = useNavigationType();
    const params = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // Remove the last history entry if the user is in the main page
        if(history === "POP" && params.pathname === "/")  {
            navigate(-1)
        }
    }, [history, params]);

    return (
        <>
            Layout:
            <Outlet />
        </>
    );
}