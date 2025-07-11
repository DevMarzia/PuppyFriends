import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Admin from "./pages/Dashboard";
import Login from "./pages/LoginForm";
import PrivateRoute from "./components/PrivateRoute";
import CardsPuppy from "./pages/CardsPuppy";
import PuppyDetail from "./pages/PuppyDetail";

function App() {
  return (
    <>
    
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cards-puppy" element={<CardsPuppy />} />
        <Route path="/card-puppy/:id" element={<PuppyDetail />} />

        
        {/* Route protetta per admin */}
        <Route
          path="/admin"
          element={
            <PrivateRoute role="admin">
              <Admin />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;


