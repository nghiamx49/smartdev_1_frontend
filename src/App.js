import Footer from "./components/footer";
import "./App.css";
import Admin from "./containers/admin"
import Login from "./components/login";
import Register from "./components/register"
function App() {
  return (
    <div className="App">
      <Admin></Admin> *
      <Login></Login>
      <Register></Register>
    </div>
  );
}

export default App;
