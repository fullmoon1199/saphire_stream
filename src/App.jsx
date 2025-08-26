import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./layout/Layout";
import ServiceAI from "./pages/home/service/ServiceAI";
import "./App.css";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service/ai" element={<ServiceAI />} />
      </Routes>
    </Layout>
  );
}

export default App;
