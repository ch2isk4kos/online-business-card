import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const Main = () => {
  return (
    <div className="Main">
      <section id="first">
        <Home />
      </section>
      <section id="second">
        <Projects />
      </section>
      <section id="third">
        <About />
      </section>
      <section id="fourth">
        <Contact />
      </section>
    </div>
  );
};

export default Main;
