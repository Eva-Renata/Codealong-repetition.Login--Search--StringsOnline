import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import { AppRouter } from "./Components/App/Router/Router";
import { Footer } from "./Components/Partials/Footer";
import { Header } from "./Components/Partials/Header";
import { Main } from "./Components/Partials/Main";
import { NavBar } from "./Components/Partials/NavBar";
import { NavBarLeft } from "./Components/Partials/NavBarLeft";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <NavBarLeft />
      <Main>
        <p>Her kan vi sætte ind props.children. findes i App.jsx</p>
        <AppRouter />
      </Main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
