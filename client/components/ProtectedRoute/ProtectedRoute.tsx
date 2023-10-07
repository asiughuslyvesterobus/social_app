import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import { ReactNode } from "react";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  // Redirect to the login page if the user is not authenticated.
  if (!isAuthenticated) {
    router.push("/login"); // Change this to your login route.
    return null;
  }

  return children;
};

export default ProtectedRoute;
