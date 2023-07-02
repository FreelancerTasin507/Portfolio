import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import SectionTitle from "../SectionTitle/SectionTitle";

const Contact = () => {
  const [themeColor, setThemeColor] = useState("");
  console.log(themeColor);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ov57qnh",
        "template_n32agur",
        form.current,
        "X3FeqWtL-XXYPhONC"
      )
      .then(
        () => {
          // Display success notification
          Swal.fire({
            title: "Success",
            text: "Your message has been sent.",
            icon: "success",
            confirmButtonText: "OK",
          });

          // Reset the form
          form.current.reset();
        },
        () => {
          // Display error notification
          Swal.fire({
            title: "Error",
            text: "Failed to send the message.",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      );
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setThemeColor(theme);
  }, []);

  return (
    <div className="mt-40">
      <SectionTitle title={"Contact Us"}></SectionTitle>
      <div className="lg:flex md:flex justify-center items-center lg:ml-60 md:gap-5">
        {themeColor === "light" ? (
          <div>
            <iframe
              className="lg:w-[500px] lg:h-[500px] md:w-[500px] h-[500px] w-[400px] lg:ml-36"
              src="https://embed.lottiefiles.com/animation/13821"
            ></iframe>
          </div>
        ) : (
          <div>
            <iframe
              className="lg:w-[400px] lg:h-[400px] md:w-[500px] h-[500px] w-[400px] lg:ml-36 rounded-2xl"
              src="https://embed.lottiefiles.com/animation/13821"
            ></iframe>
          </div>
        )}

        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-[70%] md:w-[50%] lg:w-[30%] mx-auto"
        >
          <div className="mb-4">
            <label
              className="block text-slate-300 text-sm font-bold mb-2"
              htmlFor="user_name"
            >
              Name
            </label>
            <input
              required
              className="shadow-2x  appearance-none border rounded-3xl w-full py-2 px-3 text-slate-300 leading-tight focus:outline-none focus:shadow-outline"
              id="user_name"
              type="text"
              name="user_name"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-slate-300 text-sm font-bold mb-2"
              htmlFor="user_email"
            >
              Email
            </label>
            <input
              required
              className="shadow-2x  appearance-none border rounded-3xl w-full py-2 px-3 text-slate-300 leading-tight focus:outline-none focus:shadow-outline"
              id="user_email"
              type="email"
              name="user_email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-slate-300 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-300 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name="message"
              placeholder="Message"
            />
          </div>
          <div className="flex justify-center">
            <input
              className="relative  z-0 mt-10rounded-3xl border-2 rounded-3xl border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase  transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 bg-cyan-500 before:bg-cyan-300  before:rounded-3xl before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-x-100"
              type="submit"
              value="Send"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
