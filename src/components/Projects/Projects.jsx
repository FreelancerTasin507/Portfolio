import SectionTitle from "../SectionTitle/SectionTitle";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="mt-56 ">
      <div>
        <SectionTitle title={"Projects"}></SectionTitle>
      </div>
      <div>
        <nav className="projectNav text-center ">
          <a className="projectAncor mr-5" href="">
            HTML & CSS
          </a>
          <a className="projectAncor mr-5" href="">
            Tailwind CSS
          </a>
          <a className="projectAncor mr-5" href="">
            React Js
          </a>
          <a className="projectAncor mr-5" href="">
            MERN Stack
          </a>
        </nav>
        <div className="mt-20">
          <div className="main grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:ml-40 md:ml-10">
            <a
              href="https://toy-shop-client.web.app"
              rel="noreferrer"
              target="_blank"
              className="colmdx w-[70%] ml-10 h-[300px] lg:w-[70%] md:h-[300px] lg:h-[400px]"
            ></a>
            <a
              href="https://boisterous-zuccutto-ffdb67.netlify.app/"
              rel="noreferrer"
              target="_blank"
              className="colmdx w-[70%] ml-10 h-[300px] lg:w-[70%] md:h-[300px] lg:h-[400px]"
            ></a>
            <a
              href="https://creative-quokka-e17099.netlify.app/"
              rel="noreferrer"
              target="_blank"
              className="colmdx w-[70%] ml-10 h-[300px] lg:w-[70%] md:h-[300px] lg:h-[400px]"
            ></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
