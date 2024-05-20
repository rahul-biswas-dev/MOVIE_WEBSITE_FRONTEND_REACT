/* eslint-disable no-unused-vars */
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
     if (theme === "light") {
       document.body.classList.remove("dark");
       document.body.classList.add("light");
     } else {
       document.body.classList.remove("light");
       document.body.classList.add("dark");
     }
   },[theme])

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <main className={theme}>
      </main>
    </>
  );
}

export default App;
