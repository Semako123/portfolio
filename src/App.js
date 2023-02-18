import "./App.css";
import { Navbar } from "./components";
import {
  Header,
  About,
  Skills,
  Projects,
  Experience,
  Footer,
  Contact,
} from "./containers";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
