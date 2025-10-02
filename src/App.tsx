import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Home from './pages/home'
import NotFound from './pages/notfound'

const router = createBrowserRouter([
  { path: '/home', element: <Home /> },
  { path: '/', element: <Navigate to="/home" replace /> },
  { path: '*', element: <NotFound /> },
])

export default function App() {
  return <RouterProvider router={router} />
}
