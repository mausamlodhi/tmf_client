import { baseRoutes } from "../../../helper/baseRoute";

const accessRoute = {
    HOME_PAGE:{
        path:`${baseRoutes.userBaseRoutes}`
    },
    LOGIN:{
        path:`${baseRoutes.userBaseRoutes}login`
    },
    SIGNUP:{
        path:`${baseRoutes.userBaseRoutes}signup`
    }
};
export default accessRoute;