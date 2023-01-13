import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
// import HomePage from "./components/HomePage";
// import About from "./components/About";
// import Contact from "./components/Contact";

const LazyAbout = React.lazy(()=> import("./components/About"));
const LazyContact = React.lazy(()=> import("./components/Contact"));
const LazyHome = React.lazy(()=> import("./components/HomePage"));

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <React.Suspense fallback='loading.....'>
    <Routes>
      <Route exact path="/" element={<LazyHome/>}/>
      <Route exact path="/about" element={<LazyAbout/>}/>
      <Route exact path="/contact" element={<LazyContact/>}/>
     </Routes>
     </React.Suspense>
     </BrowserRouter>
    </>
  );
}

export default App;
