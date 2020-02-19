import React from "react";
import { Route, Redirect } from "react-router-dom";
import Login from "./login";

const PrivateRoute = ({ component: Component, ...props }) => {




    return (
        <Route
            {...props}
            render={() => {
                if (localStorage.getItem("token")) {
                    return <Component {...props} />;

                } else {
                    return <Redirect to="/login" />
                }
            }}

        />
    )


}
export default PrivateRoute;

