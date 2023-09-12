import Css1Component from "./playground/Css1Component";
import Css2Component from "./playground/Css2Component";
import InlineStyleComponent from "./playground/InlineStyleComponent";
import My2Component from "./playground/My2Component";
import MyFirstComponent from "./playground/MyFirstComponent";
import StringInterpolationComponent from "./playground/StringInterpolationComponent";
import TypografyComponent from "./playground/TypografyComponent";

const App = () => {
  return (
    <div className="container">
      <MyFirstComponent />
      <My2Component />
      <StringInterpolationComponent />
      <InlineStyleComponent />
      <Css1Component />
      <Css2Component />
      <TypografyComponent />
    </div>
  );
};

export default App;
