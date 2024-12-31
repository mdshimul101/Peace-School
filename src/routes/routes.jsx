import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Teacher from "../pages/Teacher/Teacher";
import Classes from "../pages/Classes/Classes";
import Login from "../pages/Login/Login";
import Exams from "../pages/Exams/Exams";
import ErrorPage from "../pages/ErrorPage";
import DashboardLayout from "../layouts/DashboardLayout";
import AdmissionForm from "../pages/AdmissionForm/AdmissionForm";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/classes",
        element: <Classes />,
      },
      {
        path: "/exams",
        element: <Exams />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/teacher",
        element: <Teacher />,
      },
      {
        path: "/dashboard/admission-form",
        element: <AdmissionForm />,
      },
      {
        path: "/dashboard/classes",
        element: <Classes />,
      },
      {
        path: "/dashboard/exams",
        element: <Exams />,
      },
      
    ],
  },
]);
