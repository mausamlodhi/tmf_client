import { SigninComponent } from "../components";
import { UserAuthServices } from "../services/User";
import { Notification } from "../utils";

function SigninPage(){
    const handleSubmit = async(values,{resetForm})=>{
        try{
            const response = await UserAuthServices.userLogin(values);
            if(response?.status){
                Notification({
                    message:response?.message,
                    type:"success"
                })
                resetForm();
            }
        }catch(error){
            console.log(error);
        }
    }
    return <>
        <SigninComponent
            handleSubmit={handleSubmit}
        />
    </>
};

export default SigninPage