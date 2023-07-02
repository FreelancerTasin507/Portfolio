import Wave from "react-wavify";

const Wavify = () => {
  return (
    <div>
      <div className="absolute  lg:w-full w-full md:w-[890px]">
        <Wave mask="url(#mask)" fill="#81B6D5">
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="0" stopColor="white" />
              <stop offset="0.5" stopColor="black" />
            </linearGradient>
            <mask id="mask">
              <rect
                x="0"
                y="0"
                width="2000"
                height="400"
                fill="url(#gradient)"
              />
            </mask>
          </defs>
        </Wave>
      </div>
      <div className="relative top-10">
        <footer className="footer p-10 bg-[#81B6D5] bg-opacity-90 text-base-content mt-20">
          <div className="ml-10 text-slate-700">
            <a className="btn btn-ghost normal-case text-slate-700 lg:text-4xl md:text-3xl text-4xl  font-bold">
              Tasin Ahammed
            </a>
            <p>
              Tasin Ahammed
              <br />
              Providing reliable tech since 2023
            </p>
          </div>
          <div  className="text-slate-700">
            <span className="footer-title">Services</span>
            <a className="link link-hover">Web Development</a>
            <a className="link link-hover">React Js Development</a>
            <a className="link link-hover">Project Manager</a>
            <a className="link link-hover">PSD To React</a>
          </div>

          <div className="text-slate-700">
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Wavify;
