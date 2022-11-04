import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";

function ProtectRoute() {
  const { user } = useUser();
  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectRoute;
