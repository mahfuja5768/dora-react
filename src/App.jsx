import Experience from "./components/Experience";
import Feedback from "./components/Feedback";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Support from "./components/Support";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Copyright from "./components/Copyright";
import Cursor from "./components/Cursor";

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Support />
      <Service />
      <Experience />
      <Works />
      <Feedback />
      {/* <Blog /> */}
      <Contact />
      <Copyright />
      <Cursor />
    </div>
  );
}
