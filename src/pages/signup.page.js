import { useNavigate } from "react-router-dom";
import { SignupComponent } from "../components";
import { UserAuthServices } from "../services/User";
import { Notification } from "../utils";
import routesMap from "../routeControl/User/index";
function SignupPage() {
  const navigate = useNavigate();
  const handleSubmit = async (values,{resetForm}) => {
    try {
      console.log(values);
      const response = await UserAuthServices.userSignup(values);
      if (response?.status) {
        Notification({
          message: response?.message,
          type: "success",
        });
        resetForm();
      }
      navigate(`${routesMap.HOME_PAGE.path}`)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <SignupComponent handleSubmit={handleSubmit} />
    </>
  );
}
export default SignupPage;
