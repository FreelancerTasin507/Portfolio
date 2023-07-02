import SectionTitle from "../SectionTitle/SectionTitle";
import "./Skills.css";


const Skills = () => {
  return (
    <div className="lg:mt-40">
      <SectionTitle title={"Skills"}></SectionTitle>
      <div className="lg:mx-20 lg:ml-96 lg:mt-40 md:ml-48 ml-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3  justify-center gap-5">
          <iframe
            className="lg:w-[150px] lg:h-[150px] md:w-[100px] md:h-[100px] w-[100px] h-[100px]  rounded-full "
            src="https://embed.lottiefiles.com/animation/54425"
          ></iframe>
          <iframe
            className="lg:w-[150px] lg:h-[150px] md:w-[100px] md:h-[100px] w-[100px] h-[100px]  rounded-full "
            src="https://embed.lottiefiles.com/animation/63207"
          ></iframe>
          <iframe
            className="lg:w-[150px] lg:h-[150px] md:w-[100px] md:h-[100px] w-[100px] h-[100px]  rounded-full "
            src="https://embed.lottiefiles.com/animation/111794"
          ></iframe>
          <iframe
            className="lg:w-[150px] lg:h-[150px] md:w-[100px] md:h-[100px] w-[100px] h-[100px]  rounded-full "
            src="https://embed.lottiefiles.com/animation/296"
          ></iframe>
          <iframe
            className="lg:w-[150px] lg:h-[150px] md:w-[100px] md:h-[100px] w-[100px] h-[100px]  rounded-full "
            src="https://embed.lottiefiles.com/animation/63210"
          ></iframe>
          <iframe
            className="lg:w-[150px] lg:h-[150px] md:w-[100px] md:h-[100px] w-[100px] h-[100px]  rounded-full "
            src="https://embed.lottiefiles.com/animation/45525"
          ></iframe>
          <iframe
            className="lg:w-[150px] lg:h-[150px] md:w-[100px] md:h-[100px] w-[100px] h-[100px]  rounded-full "
            src="https://embed.lottiefiles.com/animation/81333"
          ></iframe>
          <img
            className="lg:w-[150px] lg:h-[150px] md:w-[100px] md:h-[100px] w-[100px] h-[100px]  rounded-full  animate-spin-slow"
            src="https://i.ibb.co/JnWjxb4/bootstrap-social-logo.png"
            alt=""
          />
          <img
            className="lg:w-[150px] lg:h-[150px] md:w-[100px] md:h-[100px] w-[100px] h-[100px]  rounded-full  animate-pulse animate-infinite"
            src="https://i.ibb.co/3zYv0GX/2048px-Tailwind-CSS-Logo-svg.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
