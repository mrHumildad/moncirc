// src/comps.jsx/SplashScreen.jsx
import { useEffect } from "react";
import "./SplashScreen.css";
import logo from "../assets/logo.png";

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // notify parent when splash ends
    }, 2500); // show for 2.5s
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-screen">
      <img src={logo} alt="Logo" className="splash-logo" />
    </div>
  );
};

export default SplashScreen;
