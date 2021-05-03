import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

//Import Components
import Navigation from './components/navigation'
import { Task1 } from './tasks/Task1'
import { Task2 } from './tasks/Task2'
import { Task3 } from './tasks/Task3'
import Home from './components/home'

//Import sass
import './styles/app.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">

          <Navigation />


          <div className="app-body">
            <Route>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>

                <Route exact path="/task1">
                  <Task1 />
                </Route>

                <Route exact path="/task2">
                  <Task2 />
                </Route>

                <Route exact path="/task3">
                  <Task3 />
                </Route>
              </Switch>
            </Route>
          </div>


        </div>

      </div>
    </BrowserRouter>

  );
}

export default App;
