
import "./App.css";
import Cart from "./containers/cart";
import HeaderC from "./components/header/HeaderCart";
import Footer from "./components/footer"

function App() {
  return (
    <div className="App">
      <HeaderC></HeaderC>
      <Cart></Cart>
      <Footer></Footer>
    </div>
  );
}

export default App;
