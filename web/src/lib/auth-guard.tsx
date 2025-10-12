import { Navigate, useLocation, useSearchParams } from 'react-router-dom'
import { useUser } from '@/contexts/UserContext'

interface AuthGuardProps {
  children: React.ReactNode
}

export function AuthGuard({ children }: AuthGuardProps) {
  const { user, loading } = useUser()
  const location = useLocation()
  const [searchParams] = useSearchParams()

  // Show nothing while checking authentication
  if (loading) {
    return null
  }

  // Redirect to login if not authenticated
  if (!user) {
    const params = new URLSearchParams(searchParams)
    params.set('redirect', location.pathname)

    return <Navigate to={`/auth/login?${params.toString()}`} replace />
  }

  return <>{children}</>
}
