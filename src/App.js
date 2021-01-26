import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import "./bootstrap.min.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/cart" component={CartScreen} />
      </Router>
    </div>
  );
};

export default App;
