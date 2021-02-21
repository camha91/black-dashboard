import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <Switch>
        {/* <Route path="/buttons" component={Buttons} />
        <Route path="/grid-system" component={GridSystem} />
        <Route path="/panels" component={Panels} />
        <Route path="/sweet-alert" component={SweetAlert} />
        <Route path="/notifications" component={Notifications} />
        <Route path="/icons" component={Icons} />
        <Route path="/typography" component={Typography} /> */}

        <Route path="/" component={Sidebar} />
      </Switch>
    </div>
  );
}

export default App;
