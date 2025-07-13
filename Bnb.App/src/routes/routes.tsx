import { authenticationRoutes } from "../features/auth/routes/routes";
import Root from "../Root";

export const routes = [
  {
    path: "/",
    Component: Root,
    children: authenticationRoutes,
  },

  {
    path: "*",
    element: (
      <>
        <div className="flex justify-center items-center min-h-screen">
          <h1 className="text-3xl text-gray-900 dark:text-white">
            Uh oh! Looks like you are lost!
          </h1>
        </div>
      </>
    ),
  },
];
