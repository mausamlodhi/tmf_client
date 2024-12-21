import { Link, useNavigate } from "react-router-dom";
import routesMap from "../routeControl/User/index";
function Header() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <header className="header">
          <div className="logo" onClick={(e)=>{
            e.preventDefault();
            navigate(routesMap.HOME_PAGE.path)
          }}>
            <span style={{ color: "green" }}>Pay</span>
            <span style={{ color: "orange" }}>Spaze</span>
          </div>
          <div>
            <Link className="button" to={routesMap.LOGIN.path} >LOG IN</Link>
            <Link className="button" to={routesMap.SIGNUP.path}>SIGN UP</Link>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
