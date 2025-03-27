import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Projects, Skills, Navbar } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <About />
        </div>
        <Skills />
        <Projects />
        <Contact />
      </div>
    </BrowserRouter>
  );
};

export default App;
