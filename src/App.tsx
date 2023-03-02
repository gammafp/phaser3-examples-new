import { MainPage } from "./pages/MainPage";
import { useDispatch } from "react-redux";
import "./App.scss";

// Import json
import foldersJSON from "./folders/examples.json";
import { useEffect } from "react";
import { setFolders } from "./state/reducers/folders";

const App = () => {
    const dispatch = useDispatch();

    // Load folder data
    useEffect(() => {
        dispatch(setFolders(foldersJSON));
    });

    return (
        <div className="App">
            <MainPage />
        </div>
    );
};

export default App;
