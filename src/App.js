import { BrowserRouter } from "react-router-dom"

import Project from "./components/project";
import Navbar from "./components/navbar";
import Footer from "./components/footer";


import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Project />
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
