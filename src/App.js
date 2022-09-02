import { Toaster } from "react-hot-toast";
import { Header, MainContainer } from "./components/export";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="">
      <Header></Header>
      <MainContainer></MainContainer>
      <Footer></Footer>
      <Toaster />
    </div>
  );
}

export default App;
