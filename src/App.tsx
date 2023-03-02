import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { useDispatch } from "react-redux";
import { MainPage } from "./pages/MainPage";

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
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
