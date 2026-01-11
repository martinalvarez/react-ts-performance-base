import {
  BrowserRouter as Router,
  Routes,
  // Route,
  // Navigate,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes></Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
