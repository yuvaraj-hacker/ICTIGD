import React, { useEffect } from "react";
import Approuter from "./Router/Approuter";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer } from "react-toastify";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Approuter />
        <ToastContainer />
      {/* Example content
      <section>
        <div>
          <p className="">Yuvaraj</p>
        </div>
      </section>
      */}
    </>
  );
}

export default App;
