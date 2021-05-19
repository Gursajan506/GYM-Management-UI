import React, {Dispatch, useCallback, useContext, useEffect, useState} from "react";
import UserAPIs from "./apis/user/user.apis";
import useIsMounted from "ismounted";
import {iStoreAction} from "./reducer";
import {AppDispatchContext, AppStateContext} from "./App";
import {CustomLoader} from "./Components/CustomLoader";
import UserPanel from "./pages/User/UserPanel";
import {AdminDashboard} from "./pages/Admin/AdminDashboard";
import LoginPage from "./pages/Login/LoginPage";
import AdminLoginPage from "./pages/Login/AdminLoginPage";
import {Redirect, Route, Switch} from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import UserList from "./pages/Admin/User/User.List";
import PaymentList from "./pages/Admin/Payment/Payment.List";
import {PaymentCreate} from "./pages/Admin/Payment/Payment.Create";
import {UserCreate} from "./pages/Admin/User/User.Create";
import {TrainerCreate} from "./pages/Admin/Trainer/Trainer.Create";
import TrainerList from "./pages/Admin/Trainer/Trainer.List";
import DietPlanList from "./pages/Admin/DietPlan/DietPlan.List";
import {DietPlanCreate} from "./pages/Admin/DietPlan/DietPlan.Create";
import {WorkoutCreate} from "./pages/Admin/Workout/Workout.Create";
import WorkoutList from "./pages/Admin/Workout/Workout.List";

export function Router() {

    const [loading, setLoading] = useState(true);

    const dispatch: Dispatch<iStoreAction> = useContext(AppDispatchContext);
    const isMounted = useIsMounted();
    const onFetchUser = useCallback(() => {
        setLoading(true);
        new UserAPIs().fetch_user().then((response) => {
            if (isMounted.current) {
                if (UserAPIs.hasError(response)) {
                    setLoading(false);
                } else {
                    dispatch({type: "set_logged_in_user", loggedInUser: {...response}})
                    // @ts-ignore
                    dispatch({type: "is_admin", is_admin: response.is_admin})
                    setLoading(false);
                }
            }
        });
    }, [isMounted, dispatch]);
    useEffect(() => {
        onFetchUser();
    }, [])

    if (loading) {
        return <CustomLoader/>;
    }
    return <div>
        <Header/>
        <Switch>
            <CustomerPrivateRoute path="/user/dashboard">
                <UserPanel/>
            </CustomerPrivateRoute>
            <AdminPrivateRoute path="/admin/dashboard">
                <AdminDashboard/>
            </AdminPrivateRoute>
            <AdminPrivateRoute path="/admin/users/edit/:id"><UserCreate/></AdminPrivateRoute>
            <AdminPrivateRoute path="/admin/users/create"><UserCreate/></AdminPrivateRoute>
            <AdminPrivateRoute path="/admin/users"><UserList/></AdminPrivateRoute>
            <AdminPrivateRoute path="/admin/trainers/edit/:id"><TrainerCreate/></AdminPrivateRoute>
            <AdminPrivateRoute path="/admin/trainers/create"><TrainerCreate/></AdminPrivateRoute>
            <AdminPrivateRoute path="/admin/trainers"><TrainerList/></AdminPrivateRoute>
            <AdminPrivateRoute path="/admin/diets/edit/:id"><DietPlanCreate/></AdminPrivateRoute>
            <AdminPrivateRoute path="/admin/diets/create"><DietPlanCreate/></AdminPrivateRoute>
            <AdminPrivateRoute path="/admin/diets"><DietPlanList/></AdminPrivateRoute>
            <AdminPrivateRoute path="/admin/workouts/edit/:id"><WorkoutCreate/></AdminPrivateRoute>
            <AdminPrivateRoute path="/admin/workouts/create"><WorkoutCreate/></AdminPrivateRoute>
            <AdminPrivateRoute path="/admin/workouts"><WorkoutList/></AdminPrivateRoute>
            <AdminPrivateRoute path="/admin/payments/create"><PaymentCreate/></AdminPrivateRoute>
            <AdminPrivateRoute path="/admin/payments"><PaymentList/></AdminPrivateRoute>
            <WithoutAuthRoute path="/admin/login"><AdminLoginPage/></WithoutAuthRoute>
            <WithoutAuthRoute path="/user/login"><LoginPage/></WithoutAuthRoute>
            <Route path="/about" component={AboutPage}/>
            <Route path="/" component={HomePage}/>
            <Redirect to="/"/>
        </Switch>
        <Footer/>
    </div>
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function CustomerPrivateRoute({children, ...rest}: any) {
    const {loggedInUser} = useContext(AppStateContext);
    return (
        <Route
            {...rest}
            render={({location}) =>
                (loggedInUser) ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/user/login",
                            state: {from: location}
                        }}
                    />
                )
            }
        />
    );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function AdminPrivateRoute({children, ...rest}: any) {
    const {loggedInUser, is_admin} = useContext(AppStateContext);
    return (
        <Route
            {...rest}
            render={({location}) =>
                (loggedInUser && is_admin) ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/admin/login",
                            state: {from: location}
                        }}
                    />
                )
            }
        />
    );
}

function WithoutAuthRoute({children, ...rest}: any) {
    const {loggedInUser} = useContext(AppStateContext);
    return (
        <Route
            {...rest}
            render={({location}) =>
                !loggedInUser ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: {from: location}
                        }}
                    />
                )
            }
        />
    );
}
