import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import UserListReactQuery from "./pages/users/UserListReactQuery";
import UserListReactHook from "./pages/users/UserListReactHook";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users-react-query" element={<UserListReactQuery />} />
        <Route path="/users-react-hook" element={<UserListReactHook />} />
      </Routes>
    </Router>
  );
}

export default App;
