import "react-toastify/dist/ReactToastify.css";
import LayoutComponent from "./layout/LayoutComponent";
import { ToastContainer } from "react-toastify";
import Router from "./routes/Router";

const App = () => {
  return (
    <LayoutComponent>
      <ToastContainer />
      <Router />
    </LayoutComponent>
  );
};

export default App;
