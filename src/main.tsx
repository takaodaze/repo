import React from "react";
import ReactDOM from "react-dom/client";
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
        <RecoilRoot>
            {import.meta.env.DEV && <RecoilDebugObserver />}
            <LoadingScreen />
            <App />
        </RecoilRoot>
    </React.StrictMode>
);
