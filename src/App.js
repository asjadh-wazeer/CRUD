import logo from "./logo.svg";
import "./App.css";
import Register from "./pages/Register";
import Navbar from "./pages/Navbar";
import Login from "./pages/Login";
import Sidebar from "./components/Sidebar";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <div className="App">
      {/* <Navbar />*/}
      <Register />
      {/* <Login /> */}
      {/* <Sidebar/> */}
    </div>
  );
}

export default App;
