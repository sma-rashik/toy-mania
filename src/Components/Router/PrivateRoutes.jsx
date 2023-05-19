import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Check for authenticated user in persistent storage (e.g., localStorage)
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    setAuthenticated(isAuthenticated);
  }, []);

  if (loading) {
    return (
      <div className="text-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  if (authenticated || user) {
    return children;
  }

  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoutes;
