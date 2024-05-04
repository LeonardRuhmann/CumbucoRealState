import Main from "../components/Main.jsx";
import { LanguageProvider } from "../context/LanguageContext.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.tsx";

function App() {
  return (
    <>
      <LanguageProvider>
        <Navbar scrollActive={true} />
        <Main />
        <Footer />
      </LanguageProvider>
    </>
  );
}

export default App;
