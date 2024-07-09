import React from "react"
import { Header, MainContainer} from "./components";
import { Route, Routes } from "react-router-dom";
import {AnimatePresence} from 'framer-motion'
import Checkout from "./components/Checkout/Checkout";



function App() {
  return (
    <AnimatePresence>
    <div className="h-auto flex flex-col md:container md:mx-auto">
   <Header />
    <main className="w-full">
      <Routes>
        <Route path="/" element={<MainContainer/>} />
        <Route path="/Checkout" element={<Checkout/>} />
      </Routes>
    </main>
    </div>
    </AnimatePresence>
  );
}

export default App;
