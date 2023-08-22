import { Route, Routes } from "react-router-dom";
import "./App.css";
import Resume from "./components/ResumeBuilder/Resume";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Utills API</h1>} />
      <Route path="/resume/*" element={<Resume />} />
    </Routes>
  );
}

export default App;
