import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Button from "../Button/Button";

const Services = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    fetch("ServiceData.json")
      .then((res) => res.json())
      .then((data) => setServicesData(data));
  }, []);
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  const handelMouseHover = () =>{
    
  }

  return (
    <div className="mt-40" id="service">
      <div>
        <SectionTitle title={"Services"}></SectionTitle>
      </div>
      <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:ml-48 md:ml-20 mx-5">
        {servicesData.map((service) => (
          <div onMouseOver={handelMouseHover} key={service.id} className="card-container">
            <div className="card w-96 h-full bg-base-100 shadow-xl hover:shadow-2xl hover:shadow-slate-400">
              <figure className="px-10 pt-10">
                <img
                  src={service.image}
                  alt="Shoes"
                  className="rounded-xl w-[100px]"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{service.title}</h2>
                <p>{service.description}</p>
                <div className="card-actions">
                  <Button></Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
