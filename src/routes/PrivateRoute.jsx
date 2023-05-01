import React, { useContext } from 'react';
import { AuthContext } from '../components/providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if (user) {
        return children;
    }
    if (loading) {
        return <div>Loading...</div>
    }
    return <Navigate to="/login" state={{ from: location }} replace ></Navigate >
};

export default PrivateRoute;