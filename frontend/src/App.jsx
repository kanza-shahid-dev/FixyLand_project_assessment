import { useLocation } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  const location = useLocation();

  const pageTitles = {
    "/": "About Us",
    "/about": "About Us",
    "/contact": "Contact Us",
    "/booking": "Book Your Stay",
  };
  const title = pageTitles[location.pathname] || "";

  return (
    <>
      <Header />
      <Hero title={title} />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
