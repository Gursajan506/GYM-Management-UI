import React, {createContext, useReducer} from "react";
import "./app.css";
import {BrowserRouter} from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {appReducer, getInitialStoreState, iStoreState} from "./reducer";
import {Router} from "./Router";

export const AppStateContext = createContext<iStoreState>(getInitialStoreState());
export const AppDispatchContext = createContext<any>({});
export default function App() {
    const [state, dispatch] = useReducer(appReducer, getInitialStoreState());

    return <BrowserRouter>
        <AppDispatchContext.Provider value={dispatch}>
            <AppStateContext.Provider value={state}>
                <div className="app">
                    <Router/>
                </div>
            </AppStateContext.Provider>
        </AppDispatchContext.Provider>
    </BrowserRouter>
}
