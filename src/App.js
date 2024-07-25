import AppDrawer from "./components/ANT/Drawer";
import CaseStudies from "./components/CaseStudies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import WorkingAccordion from "./components/WorkingAccordion";
import CustomCursor from "./components/custom/MouseCursor";
import NavbarContextAPI from "./context/NavbarContext";
import ThemeProvider from "./providers/ThemeProvider";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <NavbarContextAPI>
        <CustomCursor />
      <Navbar />
      <Header />
      <Services />
      <CaseStudies />
      <WorkingAccordion />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
      <AppDrawer />
      </NavbarContextAPI>
      </ThemeProvider>
    </div>
  );
}

export default App;
