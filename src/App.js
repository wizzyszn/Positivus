import CaseStudies from "./components/CaseStudies";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import ThemeProvider from "./providers/ThemeProvider";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
      <Navbar />
      <Header />
      <Services />
      <CaseStudies />
      </ThemeProvider>
    </div>
  );
}

export default App;
