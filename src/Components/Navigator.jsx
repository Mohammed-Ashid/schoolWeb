import React from "react";
import NavBar from "./NavBar";
import Ccarousel from "./Carousel";
import Announcements from "./Announcements";
import LatestNews from "./LatestNews";
import LatestEvents from "./LatestEvents";
import About from "./About";
import Alumni from "./Alumni";
import Companies from './Companies '
import Counter from "./Counter";
import Footer from "./Footer";

function Navigator() {
  return (
    <div>
      <NavBar />
      <section id='home'>
      <Ccarousel/></section>
      <section id="information" className="information">
        <Announcements />
        <LatestNews />
        <LatestEvents />
      </section>
      <section id="about">
        <About />
      </section>

      <section id="alumni">
        <Alumni />
      </section>
      <section id="companies">
        <Companies />
      </section>
      <section id="counter">
        <Counter />
      </section>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default Navigator;
