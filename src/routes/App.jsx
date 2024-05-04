import MainContent from "../components/MainContent.jsx";
import { LanguageProvider } from "../context/LanguageContext.jsx";
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";

function App() {
  return (
    <>
      <LanguageProvider>
        <Navbar scrollActive={true} />
        <MainContent />
        <Footer />
      </LanguageProvider>
    </>
  );
}

export default App;
