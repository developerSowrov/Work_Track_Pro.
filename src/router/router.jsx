import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Error from "../pages/Error/Error";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import PrivateRoute from "./PrivateRoute";
import DashLayout from "../dashboard/DashboardLayout/DashLayout";
import Profile from "../dashboard/profile/Profile";
import WorkSheet from "../dashboard/worksheet/WorkSheet";
import EmpList from "../dashboard/empList/EmpList";
import Details from "../dashboard/details/Details";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/registration",
    element: <Registration></Registration>,
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashLayout></DashLayout>
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <Profile></Profile> },
      //employeee
      { path: "worksheet", element: <WorkSheet></WorkSheet> },
      { path: "emne", element: <h1>hei</h1> },

      //hr
      { path: "empList", element: <EmpList></EmpList> },
      { path: "details/:id", element: <Details></Details> },
      //
    ],
  },
]);
