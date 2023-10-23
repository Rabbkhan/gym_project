import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/system";
import "./App.css";
import ExerciseDetail from "./pages/ExerciseDetails";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
