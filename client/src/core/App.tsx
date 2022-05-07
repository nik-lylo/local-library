import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import RegistrPopup from "../components/UI/popup/registr_popup/RegistrPopup";
import AppRouter from "../router/AppRouter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
      <Footer />
      <RegistrPopup />
    </div>
  );
}

export default App;
