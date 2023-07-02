import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Wavify from "./components/Wavify/Wavify";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader></Loader>
      ) : (
        <>
          <Navbar></Navbar>
          <div className="flex">
            <div className="fixed top-48 ml-20 md:hidden lg:block hidden">
              <div className="bg-slate-400 p-3 rounded-3xl flex flex-col gap-5 mt-52">
                <a
                  className="text-3xl text-black"
                  rel="noreferrer"
                  href="https://www.facebook.com/tasin.shaike.1"
                  target="_blank"
                >
                  <FaFacebook />
                </a>
                <a
                  className="text-3xl text-black"
                  rel="noreferrer"
                  href="https://twitter.com/tasinahammed001"
                  target="_blank"
                >
                  <FaTwitter />
                </a>
                <a
                  className="text-3xl text-black"
                  rel="noreferrer"
                  href="https://www.instagram.com/tasinahammed01/"
                  target="_blank"
                >
                  <FaInstagram />
                </a>
                <a
                  className="text-3xl text-black"
                  rel="noreferrer"
                  href="https://github.com/FreelancerTasin507"
                  target="_blank"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
            <div>
              <Banner></Banner>
              <Skills></Skills>
              <Projects></Projects>
              <Services></Services>
              <Contact></Contact>
              <Wavify></Wavify>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
