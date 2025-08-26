
import { Navigate } from "react-router-dom";
import { useGetMeQuery } from "../redux/userApiSlice";
import type { JSX } from "react";

const ProtectedRoute = ({
  children,
  allowedRoles,
}: {
  children: JSX.Element;
  allowedRoles: string[];
}) => {
  const { data, isLoading, isError } = useGetMeQuery(undefined);

  if (isLoading) return <div className="p-6">Checking auth...</div>;

  if (isError || !data?.user) {
   
    return <Navigate to="/login" replace />;
  }

  const role = data.user.role;
  if (!allowedRoles.includes(role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default ProtectedRoute;
