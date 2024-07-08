import React from "react"
import { Header, MainContainer} from "./components";
import { Route, Routes } from "react-router-dom";
import {AnimatePresence} from 'framer-motion'



function App() {
  return (
    <AnimatePresence>
    <div className="h-auto flex flex-col md:container md:mx-auto">
   <Header />
    <main className="w-full">
      <Routes>
        <Route path="/" element={<MainContainer/>} />
      </Routes>
    </main>
    </div>
    </AnimatePresence>
  );
}

export default App;
