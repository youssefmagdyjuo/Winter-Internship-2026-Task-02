// Components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
    const token = localStorage.getItem("mvec_token");
    if (!token) {
        return <Navigate to="/login-signup" replace />;
    }

    return children;
}
