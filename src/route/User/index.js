import { UserPublicLayout } from "../../layouts";
import publicRoutes from "./public.route";

export const userRoutes = (t) => {
  return [
    {
      element: <UserPublicLayout />,
      children: [...publicRoutes(t)],
    }
  ];
};
