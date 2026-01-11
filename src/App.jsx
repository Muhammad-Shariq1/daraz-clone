import './App.css';
import Header from './component/Header';
import Carousal from './component/carousal';
import Products from './component/Products';
import Footer1 from './component/Footer1';
import { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState(""); // search state

  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Carousal />
      <Products searchTerm={searchTerm} /> 
      <Footer1 />
    </>
  );
}

export default App;
