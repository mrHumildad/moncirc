import { useState } from "react";
import Super from "./comps.jsx/Super.jsx";
import Home from "./comps.jsx/Home.jsx";

const App = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Super':
        return <Super setCurrentPage={setCurrentPage}/>;
      case 'Magicus':
        return <Magicus setCurrentPage={setCurrentPage}/>;
      case 'Nadals':
        return <Nadals setCurrentPage={setCurrentPage}/>;
      case 'Impro':
        return <Impro setCurrentPage={setCurrentPage}/>;
      case 'Home':
      default:
        return <Home setCurrentPage={setCurrentPage}/>;
    }
  };

  return (
    <div>
      <main>
        {renderPage()}
      </main>
    </div>
  );
};

export default App;