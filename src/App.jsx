import { Start } from "./pages/Start";
import { Questions } from "./pages/Questions";
import { Routes, Route } from "react-router-dom";

const App = () => (
  <Routes>
    <Route path="/" element={<Start />} />
    <Route path="/question" element={<Questions />} />
  </Routes>
);

export default App;
