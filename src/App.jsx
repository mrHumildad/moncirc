import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Scroll2Top from "./logics/Scroll2Top.jsx";
import SplashScreen from "./comps/SplashScreen.jsx";
import Home from "./comps/Home.jsx";
import Super from "./comps/Super.jsx";
import Magicus from "./comps/Magicus.jsx";
import Nadal from "./comps/Nadal.jsx";
import Impro from "./comps/Impro.jsx";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <Router >
      <Scroll2Top />
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/super" element={<Super />} />
            <Route path="/magicus" element={<Magicus />} />
            <Route path="/nadal" element={<Nadal />} />
            <Route path="/impro" element={<Impro />} />
          </Routes>
        </main>
      )}
    </Router>
  );
};

export default App;
