import { Route, Routes } from "react-router"
import { LoginForm, RegisterForm } from "../components"

export const AuthPage = () => {
  return (
    <div>
      <Routes>
        <Route path="login" element={<LoginForm />} />
        <Route path="register" element={<RegisterForm />} />
      </Routes>
    </div>
  )
}
