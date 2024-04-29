import { createBrowserRouter, Navigate } from "react-router-dom"
import HomeLayout from "../components/layouts/HomeLayout"
import Home from "../components/Home"
import Login from "../components/Login"
import DashboardLayout from "../components/layouts/DashboardLayout"
import DashboardHome from "../components/Dashboard/DashboardHome"

const ProtectedRoute = ({ 
  user, 
  redirectPath = "/login",
  component }) => {
    if (!user) {
      return <Navigate to={redirectPath} replace />;
    }

    return component;
};

// const user = {name: "cookies", age: 69}
// const user2 = undefined

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
    path: "/dashboard",
    element: <ProtectedRoute user={true} component={<DashboardLayout component={<DashboardHome/>} />} />
  }
])


export default router