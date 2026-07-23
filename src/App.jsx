import Header from "./components/layout/Header";
import HeroSection from "./components/sections/HeroSection";
import ProjectsPreview from "./components/sections/ProjectsPreview";
import ScenariosSection from "./components/sections/ScenariosSection";
import AuthorApproachSection from "./components/sections/AuthorApproachSection";
import TurnkeyControlSection from "./components/sections/TurnkeyControlSection";
// import WorkProcessSection from "./components/sections/WorkProcessSection"; 
import CaseStoriesSection from "./components/sections/CaseStoriesSection";
import FAQSection from "./components/sections/FAQSection";
import FinalCTASection from "./components/sections/FinalCTASection";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProjectsPreview />
        <ScenariosSection />
        <AuthorApproachSection />
        <TurnkeyControlSection />
        {/* <WorkProcessSection /> */}
        <CaseStoriesSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}

export default App;
