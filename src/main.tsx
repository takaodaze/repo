import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { App } from "./App";
import "./index.css";

const rootEle = document.getElementById("root");
if (rootEle == null) {
    throw new Error("we cannot found root element");
}

ReactDOM.createRoot(rootEle).render(
    <React.StrictMode>
        <BrowserRouter>
            <RecoilRoot>
                <App />
            </RecoilRoot>
        </BrowserRouter>
    </React.StrictMode>
);
