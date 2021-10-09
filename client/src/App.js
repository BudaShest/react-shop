import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import {BrowserRouter as Router} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
        <Navbar/>
      <AppRouter/>
    </Router>
  );
}

export default App;
