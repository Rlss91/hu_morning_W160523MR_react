import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import ROUTES from "../routes/ROUTES";

const BizGuard = ({ children }) => {
  const userData = useSelector((bigPie) => bigPie.authSlice.userData);
  if (userData && userData.isBusiness) {
    return children;
  } else {
    return <Navigate to={ROUTES.LOGIN} replace={true} />;
  }
};
export default BizGuard;
