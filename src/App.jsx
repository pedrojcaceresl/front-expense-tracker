import { Route, Routes } from "react-router"
import { AuthPage } from "./app/pages/AuthPage"
import { Home } from "./app/pages/Home"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/*" element={<AuthPage />} />
      </Routes>

    </>
  )
}

export default App
