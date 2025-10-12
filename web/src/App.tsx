import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { UserProvider } from './contexts/UserContext'
import { UserLayout } from './layouts/UserLayout'
import { AuthLayout } from './layouts/AuthLayout'
import DashboardPage from './pages/dashboard'
import LoginPage from './pages/login'
import SignUpPage from './pages/signup'
import WordsPage from './pages/words'

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          {/* Auth routes with /auth prefix */}
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUpPage />} />
          </Route>

          {/* Dashboard routes at root */}
          <Route element={<UserLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/words" element={<WordsPage />} />
          </Route>

          {/* Default redirect */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
