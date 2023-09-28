import { Container } from "@mui/material";
import EventsComponent from "./playground/l4/EventsComponent";
import CardComponent from "./components/CardComponent";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import RegisterComponent from "./pages/register/RegisterPage";
import UserManagement from "./pages/users/UserManagement";
import FooterComponent from "./layout/footer/FooterComponent";
import HeaderComponent from "./layout/header/HeaderComponent";
import LayoutComponent from "./layout/LayoutComponent";
import Error404Page from "./pages/404/Error404Page";
import Router from "./routes/Router";

const App = () => {
  return (
    <LayoutComponent>
      <Router />
    </LayoutComponent>
  );
};

export default App;
