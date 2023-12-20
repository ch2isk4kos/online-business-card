import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAddressCard,
  faHouse,
  faLaptopCode,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
library.add(faHouse, faAddressCard, faLaptopCode, faPaperPlane);
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
};

export default App;
