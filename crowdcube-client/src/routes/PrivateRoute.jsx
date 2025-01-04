import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();


    if (loading) {
        return <span className="loading loading-infinity loading-lg flex justify-center items-center text-center mx-auto"></span>
    }

    if (user) {
        return children;
    }

    return (
        <Navigate to='/sign-in' state={{ from: location }} replace></Navigate>
    );
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;