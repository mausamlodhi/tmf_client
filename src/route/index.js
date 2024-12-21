import { UserLayout } from "../layouts";
import { userRoutes } from "./User";

export const routes = () => {
  return [
    {
      element: <UserLayout />,
      children: [...userRoutes()],
    },
  ];
};

export const routesList = () => {
  let routeArr = [...userRoutes()[0].children, ...userRoutes()[1].children];
  return [...routeArr];
};

export const moduleRoutesList = () => {
  let routeArr = {
    user: [...userRoutes()[0].children, ...userRoutes()[1].children],
  };
  return routeArr;
};

export const getCompletePathList = () => {
  return routesList().reduce((prev, curr) => {
    prev.push(curr);
    if (curr.children) {
      prev.push(...curr.children);
    }
    return prev;
  }, []);
};
