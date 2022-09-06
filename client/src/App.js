//import logo from "./logo.svg";
import "./bootstrap.min.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
// import Create from "./component/Create";
//import Showing from "./component/Showing"
import ListAll from "./component/ListAll";
import CreatePet from "./component/CreatePet";
import Editing from "./component/Editing";
import Showing from "./component/Showing";
//import Editing from "./component/Editing";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* craete page */}
          <Route exact path={"/new"}>
            <CreatePet />
          </Route>

          {/* List All */}
          <Route exact path={"/"}>
            <ListAll />
          </Route>

          {/* edit */}
          <Route exact path={"/edit/:id"}>
            <Editing/>
          </Route>

          {/* edit */}
          <Route exact path={"/:id"}>
            <Showing/>
          </Route>



        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
