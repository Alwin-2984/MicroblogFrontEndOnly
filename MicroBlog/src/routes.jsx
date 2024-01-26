import { lazy, Suspense } from "react";
import { Navigate, useRoutes } from "react-router-dom";

const UserLayout = lazy(() => import("./Screens/User/Dashboard/UserLayout"));
const NotFound = lazy(() => import("./Screens/Components/NotFound404"));

import "./routes.css";
// import LoginPage from "./Screens/User/LoginAndRegistration/LoginPage";
// import LoginAuthUser from "./Auth/LoginAuthUser";
import BlogList from "./Screens/User/Blog/BlogList/BlogList";
import BlogAdd from "./Screens/User/Blog/BlogAdd";
// import LoginAuthUser from "./Auth/LoginAuthUser";
// import AuthGuardUser from "./Auth/AuthGuardUser";

export default function Routes() {
  return (
    <Suspense fallback={<div id="loader" />}>
      {useRoutes([
        // {
        //   path: "/userLogin",
        //   element: (
        //     <LoginAuthUser>
        //       <LoginPage />
        //     </LoginAuthUser>
        //   ),
        // },
        {
          path: "/dashboard",

          element: (
            // <AuthGuardUser>
              <UserLayout />
            // </AuthGuardUser>
          ),
          children: [
            { element: <Navigate to="home" />, index: true },
            { path: "home", element: <BlogList />, index: true },
            { path: "home2", element: <BlogAdd />, index: true },
          ],
        },

        {
          path: "*",
          element: <NotFound replace />,
          index: true,
        },
        {
          path: "",
          element: <UserLayout />,
          children: [
            { element: <Navigate to="/dashboard/home" />, index: true },
          ],
        },
      ])}
    </Suspense>
  );
}
