import authRoute from "./Auth/index.route";

export default function route(){
    return[
        ...authRoute(),
        
    ]
}