import CaseStudies from "./components/CaseStudies";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import WorkingAccordion from "./components/WorkingAccordion";
import CustomCursor from "./components/custom/MouseCursor";
import ThemeProvider from "./providers/ThemeProvider";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <CustomCursor />
      <Navbar />
      <Header />
      <Services />
      <CaseStudies />
      <WorkingAccordion />
      <Team />
      <Testimonials />
      </ThemeProvider>
    </div>
  );
}

export default App;
