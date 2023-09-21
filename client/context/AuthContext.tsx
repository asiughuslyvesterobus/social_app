import { SignInUser } from "@/type";
import { createContext, useContext, ReactNode, useState } from "react";

// Define an interface for your authentication context data and functions
interface AuthContextType {
  isAuthenticated: SignInUser | null;
  login: (event: any) => void;
  logout: (event: any) => void;
}

// Create a provider component to wrap your app with
interface AuthProviderProps {
  children: ReactNode;
}

interface PayloadProp {
  payload: SignInUser;
}

// Create the initial context with default values
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<any | null>(null);

  const login = (payload: PayloadProp) => {
    // Implement your login logic here
    setIsAuthenticated(payload);
  };

  const logout = () => {
    setIsAuthenticated(null);
  };

  const authContextValue: AuthContextType = {
    isAuthenticated,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

// Create a custom hook for using the AuthContext
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
