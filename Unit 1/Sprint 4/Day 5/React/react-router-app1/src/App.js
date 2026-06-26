import "./styles.css";
import AllRoutes from "./components/AllRoutes";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar />

      <AllRoutes />
    </div>
  );
}
