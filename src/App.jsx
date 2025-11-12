import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Scroll2Top from "./logics/Scroll2Top.jsx";
import SplashScreen from "./comps.jsx/SplashScreen.jsx";
import Home from "./comps.jsx/Home.jsx";
import Super from "./comps.jsx/Super.jsx";
import Magicus from "./comps.jsx/Magicus.jsx";
import Nadal from "./comps.jsx/Nadal.jsx";
import Impro from "./comps.jsx/Impro.jsx";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const basename = import.meta.env.MODE === "production" ? "/uriweb" : "/";

  return (
    <Router basename={basename}>
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
