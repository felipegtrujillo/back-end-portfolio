import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas , Box} from './components';

import './index.css'; 

const App = () => {

  return (

    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* cambiar la ubicacion de la imagen de bg-hero-patter que esta en archivo tailwind.config.js */}
        <div className=" relative bg-cover bg-no-repeat bg-center "> 
        <Navbar/>
        <Hero/>
        <StarsCanvas/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
     </BrowserRouter>
  )
}

export default App
