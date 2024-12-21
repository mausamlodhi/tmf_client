import HomePage from "../../../pages/home.page";
import SignupPage from "../../../pages/signup.page";
import SigninPage from "../../../pages/signin.page";
import routesMap from "../../../routeControl/User";

export default function route(){
    return [
        {
            path:routesMap.HOME_PAGE.path,
            name:'Home page',
            key:routesMap.HOME_PAGE.path,
            isPrivate:false,
            element:<HomePage/>
        },
        {
            path:routesMap.SIGNUP.path,
            name:'Signup page',
            key:routesMap.SIGNUP.path,
            isPrivate:false,
            element:<SignupPage/>
        },
        {
            path:routesMap.LOGIN.path,
            name:'Login page',
            key:routesMap.LOGIN.path,
            isPrivate:false,
            element:<SigninPage/>
        }
    ]
}