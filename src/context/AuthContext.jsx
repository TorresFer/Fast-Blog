import { useContext } from "react";

const AuthContext = createContext()

export function AuthProvider({children, value}) {
    return <AuthContext.AuthProvider value={value}>{children}</ AuthContext.AuthProvider>
}

export function useAuthValue() {
    return useContext(AuthContext)
}