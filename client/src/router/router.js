import { createBrowserRouter, Navigate } from "react-router-dom"
import HomeLayout from "../components/layouts/HomeLayout"
import Home from "../components/Home"
import Login from "../components/Login"
import Register from "../components/Register"
import DashboardHome from "../components/Dashboard/DashboardHome"
import Play from "../components/Play/play"

const ProtectedRoute = ({ 
  user, 
  redirectPath = "/login",
  component }) => {
    if (!user) {
      return <Navigate to={redirectPath} replace />;
    }

    return component;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout component={<Home/>} />
  },
  {
    path: "/login",
    element: <HomeLayout component={<Login/>} />
  },
  {
    path: "/register",
    element: <HomeLayout component={<Register/>} />
  },
  {
    path: "/dashboard",
    element: <ProtectedRoute user={true} component={<DashboardHome/>} />
  },
  {
    path: "/play",
    element: <Play />
  }
])


export default router