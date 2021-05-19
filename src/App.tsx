import React, {createContext, useReducer} from "react";
import "./app.scss";
import {BrowserRouter} from "react-router-dom";
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
