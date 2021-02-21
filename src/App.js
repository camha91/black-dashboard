import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Sidebar from "./components/Sidebar";
import Buttons from "./views/components/Buttons";
import GridSystem from "./views/components/GridSystem";
import Icons from "./views/components/Icons";
import Notifications from "./views/components/Notifications";
import Panels from "./views/components/Panels";
import SweetAlert from "./views/components/SweetAlert";
import Typography from "./views/components/Typography";
import buttons from "./playgrounds/buttons";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/buttons" component={buttons} />
        <Route path="/grid-system" component={GridSystem} />
        <Route path="/panels" component={Panels} />
        <Route path="/sweet-alert" component={SweetAlert} />
        <Route path="/notifications" component={Notifications} />
        <Route path="/icons" component={Icons} />
        <Route path="/typography" component={Typography} />

        <Route path="/" component={Sidebar} />
      </Switch>
    </div>
  );
}

export default App;
