import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { App } from "./App";
import { RecoilDebugObserver } from "./component/functional/RecoilDebugObserver";
import { LoadingScreen } from "./component/LoadingScreen";
import "./index.css";

const rootEle = document.getElementById("root");
if (rootEle == null) {
    throw new Error("we cannot found root element");
}

ReactDOM.createRoot(rootEle).render(
    <React.StrictMode>
        <BrowserRouter>
            <RecoilRoot>
                {import.meta.env.DEV && <RecoilDebugObserver />}
                <LoadingScreen />
                <App />
            </RecoilRoot>
        </BrowserRouter>
    </React.StrictMode>
);
